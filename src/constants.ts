import {DEBUG_MODE, ESIGNET_HOST, MIMOTO_HOST} from 'react-native-dotenv';
import {VcIdType} from '../types/VC/ExistingMosipVC/vc';

export let MIMOTO_BASE_URL = MIMOTO_HOST;
export let ESIGNET_BASE_URL = ESIGNET_HOST;
export let DEBUG_MODE_ENABLED = DEBUG_MODE === 'true';

export const changeCrendetialRegistry = host => (MIMOTO_BASE_URL = host);
export const changeEsignetUrl = host => (ESIGNET_BASE_URL = host);

export const MY_VCS_STORE_KEY = 'myVCs';

export const RECEIVED_VCS_STORE_KEY = 'receivedVCs';

export const MY_LOGIN_STORE_KEY = 'myLogins';

export const BACKUP_ENC_KEY = 'backupEncKey';

export const BACKUP_ENC_KEY_TYPE = 'backupEncKeyType';

export const BACKUP_ENC_TYPE_VAL_PASSWORD = 'password';

export const BACKUP_ENC_TYPE_VAL_PHONE = 'phone';
export const UPLOAD_MAX_RETRY = 2;

export let individualId = {id: '', idType: 'UIN' as VcIdType};


export const ACTIVITY_LOG_STORE_KEY = 'activityLog';

export const SETTINGS_STORE_KEY = 'settings';

export const LAST_BACKUP_DETAILS = 'lastBackupDetails';

export const APP_ID_LENGTH = 12;

// Numbers and Upper case Alphabets without confusing characters like 0, 1, 2, I, O, Z
// prettier-ignore
export const APP_ID_DICTIONARY = [
    '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L',
    'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
];

export function isIOS(): boolean {
  return false;
}


export const BIOMETRIC_CANCELLED = 'User has cancelled biometric';
