// Module ID: 4271
// Function ID: 37389
// Name: formatSinkWantStat
// Dependencies: []
// Exports: formatSinkWantAsInt, formatSinkWantStat

// Module 4271 (formatSinkWantStat)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx");

export const formatSinkWantStat = function formatSinkWantStat(any, ssrc, arg2) {
  let str = any[ssrc];
  if (null == str) {
    let str2 = "100";
    if (arg2) {
      const _HermesInternal = HermesInternal;
      str2 = "" + any.any + " (any)";
    }
    str = str2;
  } else {
    str = str.toString();
  }
  return str;
};
export const formatSinkWantAsInt = function formatSinkWantAsInt(any, ssrc) {
  any = any[ssrc];
  if (null == any) {
    any = any.any;
  }
  return any;
};
