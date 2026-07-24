// Module ID: 8313
// Function ID: 65472
// Name: set
// Dependencies: [8314, 8309, 2]
// Exports: isLegacyBadgeId, legacyBadgeIdToBadgeId, resolveProfileBadgeId

// Module 8313 (set)
import set from "set";

let set = new Set(Object.values(require("LEGACY_BADGE_ID_MAP").LEGACY_BADGE_ID_MAP));
const result = set.fileFinishedImporting("modules/badges/BadgeIdResolution.tsx");

export const legacyBadgeIdToBadgeId = function legacyBadgeIdToBadgeId(arg0) {
  return require(8314) /* LEGACY_BADGE_ID_MAP */.LEGACY_BADGE_ID_MAP[arg0];
};
export const resolveProfileBadgeId = function resolveProfileBadgeId(id) {
  const tmp = require(8314) /* LEGACY_BADGE_ID_MAP */.LEGACY_BADGE_ID_MAP[id];
  if (null != tmp) {
    return tmp;
  } else {
    const tmp4 = require(8309) /* BadgeId */.BadgeId[id.toUpperCase(id)];
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
