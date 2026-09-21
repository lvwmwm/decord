// Module ID: 11450
// Function ID: 11451
// Name: useTenureBadgeRequirementString
// Dependencies: [1374, 11451, 7870, 1115, 2]
// Exports: getTenureBadgeRequirementString, useTenureBadgeRequirementString

// Module 11450 (useTenureBadgeRequirementString)
import util from "util" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import useTenureBadging from "useTenureBadging" /* 11451 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  const tieredTenureBadge = useTenureBadging.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = tmp(7870).getTieredTenureBadgeData(tieredTenureBadge);
    ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
    if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
      if (tmp6.PREMIUM_TENURE_3_MONTH !== id) {
        if (tmp6.PREMIUM_TENURE_6_MONTH !== id) {
          if (tmp6.PREMIUM_TENURE_12_MONTH !== id) {
            if (tmp6.PREMIUM_TENURE_24_MONTH !== id) {
              if (tmp6.PREMIUM_TENURE_36_MONTH !== id) {
                if (tmp6.PREMIUM_TENURE_60_MONTH !== id) {
                  let formatToPlainStringResult = null;
                }
              }
            }
          }
          const intl = tmp(1115).intl;
          const obj2 = { years: tenureReqNumMonths / 12 };
          formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t.qOdyDe, obj2);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = tmp(1115).intl;
    const obj3 = { months: tenureReqNumMonths };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.erUSmA, obj3);
    const tmpResult = tmp(7870);
  }
};
export const getTenureBadgeRequirementString = function getTenureBadgeRequirementString(id, tenureReqNumMonths) {
  if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
    if (tmp.PREMIUM_TENURE_3_MONTH !== id) {
      if (tmp.PREMIUM_TENURE_6_MONTH !== id) {
        if (tmp.PREMIUM_TENURE_12_MONTH !== id) {
          if (tmp.PREMIUM_TENURE_24_MONTH !== id) {
            if (tmp.PREMIUM_TENURE_36_MONTH !== id) {
              if (tmp.PREMIUM_TENURE_60_MONTH !== id) {
                if (tmp.PREMIUM_TENURE_72_MONTH !== id) {
                  return null;
                }
              }
            }
          }
        }
        const intl = util.intl;
        const obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(util.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = util.intl;
  return intl2.formatToPlainString(util.t.erUSmA, { months: tenureReqNumMonths });
};
