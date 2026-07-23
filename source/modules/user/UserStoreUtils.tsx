// Module ID: 1855
// Function ID: 20439
// Name: getEnv
// Dependencies: [1856, 653, 44, 1360, 2]
// Exports: getPremiumTypeFromRawValue, isStaffEnv, isStaffEnvRawData, validatePremiumType

// Module 1855 (getEnv)
import { Environments } from "Environments";
import ME from "ME";

let closure_4;
let closure_5;
function getEnv(arg0) {
  let str = "production";
  if ("production" === Environments.TEST) {
    str = "production";
    if (null != arg0) {
      str = arg0;
    }
  }
  return str;
}
({ PREMIUM_TYPE_NONE: closure_4, UserFlags: closure_5 } = ME);
const result = require("invariant").fileFinishedImporting("modules/user/UserStoreUtils.tsx");

export const validatePremiumType = function validatePremiumType(arg0, arg1, premiumType) {
  let tmp = arg0;
  if (!arg0) {
    tmp = undefined === arg1;
  }
  if (!tmp) {
    importDefault(44)(premiumType === arg1, "Premium type should not change for non-staff users");
  }
};
export { getEnv };
export const isStaffEnv = function isStaffEnv(currentUser) {
  let tmp2 = getEnv(arg1) === Environments.DEVELOPMENT;
  if (!tmp2) {
    const _window = window;
    tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
  }
  if (!tmp2) {
    let tmp6 = null != currentUser;
    if (tmp6) {
      tmp6 = currentUser.isStaff() || currentUser.isStaffPersonal();
      const tmp7 = currentUser.isStaff() || currentUser.isStaffPersonal();
    }
    tmp2 = tmp6;
  }
  return tmp2;
};
export const isStaffEnvRawData = function isStaffEnvRawData(flags) {
  let tmp2 = getEnv(arg1) !== Environments.DEVELOPMENT;
  if (tmp2) {
    const _window = window;
    tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL !== Environments.STAGING;
  }
  let tmp5 = !tmp2;
  if (tmp2) {
    let tmp7 = null != flags;
    if (tmp7) {
      let tmp8 = null == flags.flags;
      if (!tmp8) {
        tmp8 = !require(1360) /* hasFlag */.hasFlag(flags.flags, constants.STAFF);
        const obj = require(1360) /* hasFlag */;
      }
      let tmp12 = !tmp8;
      if (tmp8) {
        tmp12 = null != flags.personal_connection_id;
      }
      tmp7 = tmp12;
    }
    tmp5 = tmp7;
  }
  return tmp5;
};
export function getPremiumTypeFromRawValue(premium_type) {
  if (undefined === premium_type) {
    let tmp2 = premium_type;
  } else {
    tmp2 = null;
  }
  return tmp2;
}
