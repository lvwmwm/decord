// Module ID: 16014
// Function ID: 123646
// Name: isLimitedAccessErrorCode
// Dependencies: [653, 2]
// Exports: isLimitedAccessErrorCode

// Module 16014 (isLimitedAccessErrorCode)
import { AbortCodes } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  let tmp = 403 === arg0;
  if (tmp) {
    tmp = null != arg1;
  }
  if (tmp) {
    tmp = arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT;
  }
  if (tmp) {
    tmp = arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX;
  }
  return tmp;
};
