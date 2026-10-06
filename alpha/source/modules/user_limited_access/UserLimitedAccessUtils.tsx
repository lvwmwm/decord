// Module ID: 9450
// Function ID: 9451
// Name: UserLimitedAccessUtils
// Dependencies: [1085, 2]
// Exports: isLimitedAccessErrorCode

// Module 9450 (UserLimitedAccessUtils)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  return arg0 >= 400 && arg0 < 500 && null != arg1 && arg1 >= AbortCodes.USER_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.USER_LIMITED_ACCESS_MAX;
};
