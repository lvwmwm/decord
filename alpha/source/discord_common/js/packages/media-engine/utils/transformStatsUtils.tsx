// Module ID: 5853
// Function ID: 5854
// Name: transformStatsUtils
// Dependencies: [2]
// Exports: formatSinkWantAsInt, formatSinkWantStat

// Module 5853 (transformStatsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx");

export function formatSinkWantStat(id, ssrc, arg2) {
  let str1;
  if (null == id[ssrc]) {
    let str2 = "100";
    if (arg2) {
      const _HermesInternal = HermesInternal;
      str2 = "" + id.any + " (any)";
    }
    str1 = str2;
  } else {
    str1 = str.toString();
  }
  return str1;
}
export function formatSinkWantAsInt(id, ssrc) {
  let any = id[ssrc];
  if (null == any) {
    any = id.any;
  }
  return any;
}
