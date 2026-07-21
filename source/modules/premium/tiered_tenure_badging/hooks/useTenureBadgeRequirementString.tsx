// Module ID: 8549
// Function ID: 67951
// Name: getTenureBadgeRequirementString
// Dependencies: []
// Exports: useTenureBadgeRequirementString

// Module 8549 (getTenureBadgeRequirementString)
function getTenureBadgeRequirementString(id, tenureReqNumMonths) {
  if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
    if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== id) {
      if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== id) {
        if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== id) {
          if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== id) {
            if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== id) {
              if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== id) {
                if (TieredTenureBadge.PREMIUM_TENURE_72_MONTH !== id) {
                  return null;
                }
              }
            }
          }
        }
        const intl = require(dependencyMap[3]).intl;
        let obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(require(dependencyMap[3]).t.qOdyDe, obj);
      }
    }
  }
  const intl2 = require(dependencyMap[3]).intl;
  obj = { months: tenureReqNumMonths };
  return intl2.formatToPlainString(require(dependencyMap[3]).t.erUSmA, obj);
}
const TieredTenureBadge = require(dependencyMap[0]).TieredTenureBadge;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  const tieredTenureBadge = require(dependencyMap[1]).useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = require(dependencyMap[2]).getTieredTenureBadgeData(tieredTenureBadge);
    return getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths);
  }
  const obj = require(dependencyMap[1]);
};
export { getTenureBadgeRequirementString };
