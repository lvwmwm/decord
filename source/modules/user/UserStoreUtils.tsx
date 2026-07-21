// Module ID: 1855
// Function ID: 20438
// Name: getEnv
// Dependencies: []
// Exports: getPremiumTypeFromRawValue, isStaffEnv, isStaffEnvRawData, validatePremiumType

// Module 1855 (getEnv)
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
const Environments = require(dependencyMap[0]).Environments;
const _module = require(dependencyMap[1]);
({ PREMIUM_TYPE_NONE: closure_4, UserFlags: closure_5 } = _module);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user/UserStoreUtils.tsx");

export const validatePremiumType = function validatePremiumType(arg0, arg1, premiumType) {
  let tmp = arg0;
  if (!arg0) {
    tmp = undefined === arg1;
  }
  if (!tmp) {
    importDefault(dependencyMap[2])(premiumType === arg1, "Premium type should not change for non-staff users");
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
        tmp8 = !require(dependencyMap[3]).hasFlag(flags.flags, constants.STAFF);
        const obj = require(dependencyMap[3]);
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
