// Module ID: 11443
// Function ID: 11444
// Name: useTenureBadgeRequirementString
// Dependencies: [1385, 11444, 7781, 1113, 2]
// Exports: getTenureBadgeRequirementString, useTenureBadgeRequirementString

// Module 11443 (useTenureBadgeRequirementString)
import intl3 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7781 */;
import useTenureBadging from "useTenureBadging" /* 11444 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export function useTenureBadgeRequirementString() {
  let id;
  let tenureReqNumMonths;
  const obj = useTenureBadging;
  const tieredTenureBadge = obj.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tmpResult = TieredTenureBadgeUtils;
    const tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
    ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
    if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
      if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== id) {
        let formatToPlainStringResult;
        if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== id) {
          if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== id) {
            if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== id) {
              if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== id) {
                if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== id) {
                  formatToPlainStringResult = null;
                }
              }
            }
          }
          const intl = tmp(1113).intl;
          const obj2 = { years: tenureReqNumMonths / 12 };
          formatToPlainStringResult = intl.formatToPlainString(tmp(1113).t.qOdyDe, obj2);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = tmp(1113).intl;
    const obj3 = { months: tenureReqNumMonths };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t.erUSmA, obj3);
  }
}
export function getTenureBadgeRequirementString(id, tenureReqNumMonths) {
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
        const intl = intl3.intl;
        const obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(intl3.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = intl3.intl;
  const obj2 = { months: tenureReqNumMonths };
  return intl2.formatToPlainString(intl3.t.erUSmA, obj2);
}
