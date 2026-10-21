// Module ID: 7395
// Function ID: 7396
// Name: UserLimitedAccessUtils
// Dependencies: [1087, 2]
// Exports: isLimitedAccessErrorCode

// Module 7395 (UserLimitedAccessUtils)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  return arg0 >= 400 && arg0 < 500 && null != arg1 && arg1 >= AbortCodes.USER_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.USER_LIMITED_ACCESS_MAX;
};
