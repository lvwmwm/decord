// Module ID: 7135
// Function ID: 7136
// Name: getTieredTenureBadgeData
// Dependencies: [1924, 3943, 2]
// Exports: getEarnedOnDate, getTieredTenureBadge, getTieredTenureBadgeData

// Module 7135 (getTieredTenureBadgeData)
import { TENURE_BADGES } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

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
    const obj = importDefault(3943)(premiumSince);
    obj.add(tmp3.tenureReqNumMonths, "months");
    obj.add(1, "days");
    return obj.toDate();
  }
};
