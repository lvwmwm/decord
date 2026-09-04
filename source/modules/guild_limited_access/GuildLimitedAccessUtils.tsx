// Module ID: 17212
// Function ID: 17213
// Name: isLimitedAccessErrorCode
// Dependencies: [673, 2]
// Exports: isLimitedAccessErrorCode

// Module 17212 (isLimitedAccessErrorCode)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const AbortCodes = ME.AbortCodes;
const result = set.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

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
