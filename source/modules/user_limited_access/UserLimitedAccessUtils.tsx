// Module ID: 8919
// Function ID: 70386
// Name: isLimitedAccessErrorCode
// Dependencies: []
// Exports: isLimitedAccessErrorCode

// Module 8919 (isLimitedAccessErrorCode)
const AbortCodes = require(dependencyMap[0]).AbortCodes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  let tmp = arg0 >= 400;
  if (tmp) {
    tmp = arg0 < 500;
  }
  if (tmp) {
    tmp = null != arg1;
  }
  if (tmp) {
    tmp = arg1 >= AbortCodes.USER_LIMITED_ACCESS_DEFAULT;
  }
  if (tmp) {
    tmp = arg1 <= AbortCodes.USER_LIMITED_ACCESS_MAX;
  }
  return tmp;
};
