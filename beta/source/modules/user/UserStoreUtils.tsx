// Module ID: 1394
// Function ID: 1395
// Name: UserStoreUtils
// Dependencies: [1395, 1072, 38, 1396, 2]
// Exports: getEnv, getPremiumTypeFromRawValue, isStaffEnv, isStaffEnvRawData, validatePremiumType

// Module 1394 (UserStoreUtils)
import _modDef38 from "module_38" /* 38 */;
import UserStoreConstants from "UserStoreConstants" /* 1395 */;
import FlagUtils from "FlagUtils" /* 1396 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const Environments = UserStoreConstants.Environments;
({ PREMIUM_TYPE_NONE: closure_4, UserFlags: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/user/UserStoreUtils.tsx");

export function validatePremiumType(arg0, premiumType, premiumType2) {
  const tmp = arg0 || undefined === premiumType;
  if (!tmp) {
    _modDef38(premiumType2 === premiumType, "Premium type should not change for non-staff users");
  }
}
export function getEnv(arg0) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != arg0) {
      str = arg0;
    }
  }
  return str;
}
export function isStaffEnv(currentUser) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != arg1) {
      str = tmp;
    }
  }
  let tmp4 = str === tmp2.DEVELOPMENT;
  if (!tmp4) {
    const _window = window;
    tmp4 = window.GLOBAL_ENV.RELEASE_CHANNEL === tmp2.STAGING;
  }
  if (!tmp4) {
    let tmp8 = null != currentUser;
    if (tmp8) {
      tmp8 = currentUser.isStaff() || currentUser.isStaffPersonal();
      currentUser.isStaff() || currentUser.isStaffPersonal();
    }
    tmp4 = tmp8;
  }
  return tmp4;
}
export function isStaffEnvRawData(flags) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != arg1) {
      str = tmp;
    }
  }
  let tmp4 = str !== tmp2.DEVELOPMENT;
  if (tmp4) {
    const _window = window;
    tmp4 = window.GLOBAL_ENV.RELEASE_CHANNEL !== tmp2.STAGING;
  }
  let tmp6 = !tmp4;
  if (tmp4) {
    let tmp9 = null != flags;
    if (tmp9) {
      let tmp10 = null == flags.flags;
      if (!tmp10) {
        const obj = FlagUtils;
        tmp10 = !obj.hasFlag(flags.flags, hasOwnProperty.STAFF);
      }
      let tmp14 = !tmp10;
      if (tmp10) {
        tmp14 = null != flags.personal_connection_id;
      }
      tmp9 = tmp14;
    }
    tmp6 = tmp9;
  }
  return tmp6;
}
export function getPremiumTypeFromRawValue(premium_type) {
  let tmp2;
  if (undefined === premium_type) {
    tmp2 = premium_type;
  } else {
    tmp2 = null;
  }
  return tmp2;
}
