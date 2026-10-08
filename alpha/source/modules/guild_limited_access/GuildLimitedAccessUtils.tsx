// Module ID: 17744
// Function ID: 17745
// Name: GuildLimitedAccessUtils
// Dependencies: [1085, 2]
// Exports: isLimitedAccessErrorCode

// Module 17744 (GuildLimitedAccessUtils)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  return 403 === arg0 && null != arg1 && arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX;
};
