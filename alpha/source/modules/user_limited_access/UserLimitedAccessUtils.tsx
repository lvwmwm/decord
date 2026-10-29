// Module ID: 7478
// Function ID: 7479
// Name: UserLimitedAccessUtils
// Dependencies: [1084, 2]
// Exports: isLimitedAccessErrorCode

// Module 7478 (UserLimitedAccessUtils)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

export function isLimitedAccessErrorCode(arg0, arg1) {
  return arg0 >= 400 && arg0 < 500 && null != arg1 && arg1 >= AbortCodes.USER_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.USER_LIMITED_ACCESS_MAX;
}
