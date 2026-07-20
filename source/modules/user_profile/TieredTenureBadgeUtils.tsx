// Module ID: 6867
// Function ID: 54315
// Name: getTieredTenureBadgeData
// Dependencies: []
// Exports: getEarnedOnDate, getTieredTenureBadge

// Module 6867 (getTieredTenureBadgeData)
function getTieredTenureBadgeData(tieredTenureBadge) {
  return TENURE_BADGES[tieredTenureBadge];
}
const TENURE_BADGES = require(dependencyMap[0]).TENURE_BADGES;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/TieredTenureBadgeUtils.tsx");

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
      const obj = importDefault(dependencyMap[1])(premiumSince);
      obj.add(tmp3.tenureReqNumMonths, "months");
      obj.add(1, "days");
      return obj.toDate();
    }
  }
};
