// Module ID: 17074
// Function ID: 17075
// Name: GuildLimitedAccessUtils
// Dependencies: [1086, 2]
// Exports: isLimitedAccessErrorCode

// Module 17074 (GuildLimitedAccessUtils)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  return 403 === arg0 && null != arg1 && arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX;
};
