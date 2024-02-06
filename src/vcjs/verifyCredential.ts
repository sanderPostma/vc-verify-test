const vcjs = require('@digitalcredentials/vc');
const jsonld = require('@digitalcredentials/jsonld');
import {RsaSignature2018} from '..//jsonld-signatures/suites/rsa2018/RsaSignature2018';
import {Ed25519Signature2018} from '../jsonld-signatures/suites/ed255192018/Ed25519Signature2018';
import {AssertionProofPurpose} from '../jsonld-signatures/purposes/AssertionProofPurpose';
import {PublicKeyProofPurpose} from '..//jsonld-signatures/purposes/PublicKeyProofPurpose';
import {VerifiableCredential} from '../../types/VC/ExistingMosipVC/vc';
import {Credential} from '../../types/VC/EsignetMosipVC/vc';

// FIXME: Ed25519Signature2018 not fully supported yet.
// Ed25519Signature2018 proof type check is not tested with its real credential
const ProofType = {
    ED25519: 'Ed25519Signature2018',
    RSA: 'RsaSignature2018',
};

const ProofPurpose = {
    Assertion: 'assertionMethod',
    PublicKey: 'publicKey',
};

export async function verifyCredential(
    verifiableCredential: VerifiableCredential | Credential,
): Promise<any> {
    let purpose: PublicKeyProofPurpose | AssertionProofPurpose;
    switch (verifiableCredential.proof.proofPurpose) {
        default:
            purpose = new PublicKeyProofPurpose();
            break;
        case ProofPurpose.Assertion:
            purpose = new AssertionProofPurpose();
            break;
    }

    let suite: Ed25519Signature2018 | RsaSignature2018;
    const suiteOptions = {
        verificationMethod: verifiableCredential.proof.verificationMethod,
        date: verifiableCredential.proof.created,
    };
    switch (verifiableCredential.proof.type) {
        case ProofType.ED25519: {
            suite = new Ed25519Signature2018(suiteOptions);
            break;
        }
        default: {
            suite = new RsaSignature2018(suiteOptions);
            break;
        }
    }
    const vcjsOptions = {
        purpose,
        suite,
        credential: verifiableCredential,
        documentLoader: jsonld.documentLoaders.node(),
    };

    return await vcjs.verifyCredential(vcjsOptions);
}
