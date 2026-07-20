// Module ID: 8257
// Function ID: 65170
// Name: set
// Dependencies: [1348, 653, 621]
// Exports: isLegacyBadgeId, legacyBadgeIdToBadgeId, resolveProfileBadgeId

// Module 8257 (set)
import module_621 from "module_621";

const set = new Set(Object.values(require("_isNativeReflectConstruct").LEGACY_BADGE_ID_MAP));
const result = module_621.fileFinishedImporting("modules/badges/BadgeIdResolution.tsx");

export const legacyBadgeIdToBadgeId = function legacyBadgeIdToBadgeId(arg0) {
  return require(dependencyMap[0]).LEGACY_BADGE_ID_MAP[arg0];
};
export const resolveProfileBadgeId = function resolveProfileBadgeId(id) {
  const tmp = require(dependencyMap[0]).LEGACY_BADGE_ID_MAP[id];
  if (null != tmp) {
    return tmp;
  } else {
    const tmp4 = require(dependencyMap[1]).BadgeId[id.toUpperCase(id)];
    let tmp5;
    if ("number" === typeof tmp4) {
      tmp5 = tmp4;
    }
    return tmp5;
  }
};
export const isLegacyBadgeId = function isLegacyBadgeId(arg0) {
  return set.has(arg0);
};
