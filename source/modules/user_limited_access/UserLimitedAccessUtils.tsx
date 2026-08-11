// Module ID: 9252
// Function ID: 9253
// Name: isLimitedAccessErrorCode
// Dependencies: [676, 2]
// Exports: isLimitedAccessErrorCode

// Module 9252 (isLimitedAccessErrorCode)
import { AbortCodes } from "ME";

const result = require("set").fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

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
