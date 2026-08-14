// Module ID: 8854
// Function ID: 8855
// Name: set
// Dependencies: [8855, 8849, 2]
// Exports: isLegacyBadgeId, legacyBadgeIdToBadgeId, resolveProfileBadgeId

// Module 8854 (set)
import set from "set";

let set = new Set(Object.values(require("LEGACY_BADGE_ID_MAP").LEGACY_BADGE_ID_MAP));
const result = set.fileFinishedImporting("modules/badges/BadgeIdResolution.tsx");

export const legacyBadgeIdToBadgeId = function legacyBadgeIdToBadgeId(arg0) {
  return require(8855) /* LEGACY_BADGE_ID_MAP */.LEGACY_BADGE_ID_MAP[arg0];
};
export const resolveProfileBadgeId = function resolveProfileBadgeId(id) {
  const tmp3 = require(8855) /* LEGACY_BADGE_ID_MAP */.LEGACY_BADGE_ID_MAP[id];
  if (null != tmp3) {
    return tmp3;
  } else {
    const tmp4 = tmp(8849).BadgeId[id.toUpperCase(id)];
    let tmp5;
    if (typeof tmp4 === "number") {
      tmp5 = tmp4;
    }
    return tmp5;
  }
  tmp = require;
};
export const isLegacyBadgeId = function isLegacyBadgeId(arg0) {
  return set.has(arg0);
};
