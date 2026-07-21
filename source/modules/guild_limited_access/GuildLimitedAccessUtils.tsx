// Module ID: 15838
// Function ID: 121064
// Name: isLimitedAccessErrorCode
// Dependencies: []
// Exports: isLimitedAccessErrorCode

// Module 15838 (isLimitedAccessErrorCode)
const AbortCodes = require(dependencyMap[0]).AbortCodes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

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
