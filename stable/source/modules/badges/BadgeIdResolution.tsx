// Module ID: 8714
// Function ID: 8715
// Name: BadgeIdResolution
// Dependencies: [8715, 8704, 8716, 8705, 8717, 2]
// Exports: isLegacyBadgeId, legacyBadgeIdToBadgeId, resolveProfileBadgeId, toProfileBadgeLegacyId

// Module 8714 (BadgeIdResolution)
import Constants from "Constants" /* 8704 */;
import BadgeId from "BadgeId" /* 8705 */;
import Constants2 from "Constants" /* 8715 */;
import LegacyBadgeIdMap from "LegacyBadgeIdMap" /* 8716 */;
import types from "types" /* 8717 */;
import size from "module_2" /* 2 */;

const DEFAULT_PREMIUM_BADGE_ID = Constants2.DEFAULT_PREMIUM_BADGE_ID;
const getBadgeName = Constants.getBadgeName;
const items = [BadgeId.BadgeId.PREMIUM_TENURE, DEFAULT_PREMIUM_BADGE_ID];
const items1 = [items, ];
const items2 = [BadgeId.BadgeId.ORB_PROFILE, types.OrbBadges.ORB_PROFILE_BADGE];
items1[1] = items2;
const map = new Map(items1);
const set = new Set(Object.values(LegacyBadgeIdMap.LEGACY_BADGE_ID_MAP));
const result = size.fileFinishedImporting("modules/badges/BadgeIdResolution.tsx");

export const legacyBadgeIdToBadgeId = function legacyBadgeIdToBadgeId(arg0) {
  return LegacyBadgeIdMap.LEGACY_BADGE_ID_MAP[arg0];
};
export const resolveProfileBadgeId = function resolveProfileBadgeId(id) {
  const tmp3 = LegacyBadgeIdMap.LEGACY_BADGE_ID_MAP[id];
  if (null != tmp3) {
    return tmp3;
  } else {
    const tmp4 = BadgeId.BadgeId[id.toUpperCase(id)];
    let tmp5;
    if (typeof tmp4 === "number") {
      tmp5 = tmp4;
    }
    return tmp5;
  }
};
export const toProfileBadgeLegacyId = function toProfileBadgeLegacyId(badge_id) {
  let value = map.get(badge_id);
  if (value == null) {
    value = getBadgeName(badge_id);
  }
  return value;
};
export const isLegacyBadgeId = function isLegacyBadgeId(badge_id) {
  return set.has(badge_id);
};
