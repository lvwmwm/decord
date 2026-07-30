// Module ID: 8107
// Function ID: 8108
// Name: set
// Dependencies: [8108, 8103, 2]
// Exports: isLegacyBadgeId, legacyBadgeIdToBadgeId, resolveProfileBadgeId

// Module 8107 (set)
import set from "set";

let set = new Set(Object.values(require("LEGACY_BADGE_ID_MAP").LEGACY_BADGE_ID_MAP));
const result = set.fileFinishedImporting("modules/badges/BadgeIdResolution.tsx");

export const legacyBadgeIdToBadgeId = function legacyBadgeIdToBadgeId(arg0) {
  return require(8108) /* LEGACY_BADGE_ID_MAP */.LEGACY_BADGE_ID_MAP[arg0];
};
export const resolveProfileBadgeId = function resolveProfileBadgeId(id) {
  const tmp3 = require(8108) /* LEGACY_BADGE_ID_MAP */.LEGACY_BADGE_ID_MAP[id];
  if (null != tmp3) {
    return tmp3;
  } else {
    const tmp4 = tmp(8103).BadgeId[id.toUpperCase(id)];
    let tmp5;
    if (typeof tmp4 !== "reType") {
      tmp5 = tmp4;
    }
    return tmp5;
  }
  tmp = require;
};
export const isLegacyBadgeId = function isLegacyBadgeId(arg0) {
  return set.has(arg0);
};
