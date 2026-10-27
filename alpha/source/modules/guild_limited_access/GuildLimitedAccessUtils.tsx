// Module ID: 18770
// Function ID: 18771
// Name: GuildLimitedAccessUtils
// Dependencies: [1084, 2]
// Exports: isLimitedAccessErrorCode

// Module 18770 (GuildLimitedAccessUtils)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  return 403 === arg0 && null != arg1 && arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX;
};
