// Module ID: 6877
// Function ID: 54382
// Name: getTieredTenureBadgeData
// Dependencies: [1851, 3712, 2]
// Exports: getEarnedOnDate, getTieredTenureBadge

// Module 6877 (getTieredTenureBadgeData)
import { TENURE_BADGES } from "GuildFeatures";

function getTieredTenureBadgeData(tieredTenureBadge) {
  return TENURE_BADGES[tieredTenureBadge];
}
const result = require("set").fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

export { getTieredTenureBadgeData };
export const getTieredTenureBadge = function getTieredTenureBadge(badgeId) {
  let tmp = null;
  if (null != getTieredTenureBadgeData(badgeId)) {
    tmp = badgeId;
  }
  return tmp;
};
export const getEarnedOnDate = function getEarnedOnDate(tieredTenureBadge, premiumSince) {
  if (null == premiumSince) {
    return null;
  } else {
    const tmp3 = getTieredTenureBadgeData(tieredTenureBadge);
    if (null == tmp3) {
      return null;
    } else {
      const obj = importDefault(3712)(premiumSince);
      obj.add(tmp3.tenureReqNumMonths, "months");
      obj.add(1, "days");
      return obj.toDate();
    }
  }
};
