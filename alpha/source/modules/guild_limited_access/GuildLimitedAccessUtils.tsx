// Module ID: 19372
// Function ID: 19373
// Name: GuildLimitedAccessUtils
// Dependencies: [1072, 2]
// Exports: isLimitedAccessErrorCode

// Module 19372 (GuildLimitedAccessUtils)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export function isLimitedAccessErrorCode(arg0, arg1) {
  return 403 === arg0 && null != arg1 && arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX;
}
