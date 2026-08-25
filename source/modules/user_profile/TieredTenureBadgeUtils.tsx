// Module ID: 7240
// Function ID: 7241
// Name: getTieredTenureBadgeData
// Dependencies: [1924, 3979, 2]
// Exports: getEarnedOnDate, getTieredTenureBadge, getTieredTenureBadgeData

// Module 7240 (getTieredTenureBadgeData)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import hooksDefault from "hooks" /* 3979 */;

const TENURE_BADGES = GuildFeatures.TENURE_BADGES;
const result = set.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

export const getTieredTenureBadgeData = function getTieredTenureBadgeData(tieredTenureBadge) {
  return TENURE_BADGES[tieredTenureBadge];
};
export const getTieredTenureBadge = function getTieredTenureBadge(badgeId) {
  let tmp = null;
  if (null != TENURE_BADGES[badgeId]) {
    tmp = badgeId;
  }
  return tmp;
};
export const getEarnedOnDate = function getEarnedOnDate(tieredTenureBadgeForUser, premiumSince) {
  if (null == premiumSince) {
    return null;
  } else if (null == TENURE_BADGES[tieredTenureBadgeForUser]) {
    return null;
  } else {
    const obj = hooksDefault(premiumSince);
    obj.add(tmp3.tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
};
