// Module ID: 11438
// Function ID: 11439
// Name: useTenureBadgeRequirementString
// Dependencies: [1378, 558, 568, 11439, 7875, 1119, 2]
// Exports: getTenureBadgeRequirementString

// Module 11438 (useTenureBadgeRequirementString)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PremiumConstants from "PremiumConstants" /* 1378 */;
import useTenureBadging from "useTenureBadging" /* 11439 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const TieredTenureBadgeUtils = erUSmA(7875);
const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
function getTenureBadgeRequirementString(badge, tenureReqNumMonths) {
  if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== badge) {
    if (tmp.PREMIUM_TENURE_3_MONTH !== badge) {
      if (tmp.PREMIUM_TENURE_6_MONTH !== badge) {
        if (tmp.PREMIUM_TENURE_12_MONTH !== badge) {
          if (tmp.PREMIUM_TENURE_24_MONTH !== badge) {
            if (tmp.PREMIUM_TENURE_36_MONTH !== badge) {
              if (tmp.PREMIUM_TENURE_60_MONTH !== badge) {
                if (tmp.PREMIUM_TENURE_72_MONTH !== badge) {
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
}
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let erUSmA = require;
  let obj = dependencyMap;
  const cResult = c.c(2);
  const tieredTenureBadge = useTenureBadging.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else if (cResult[0] !== tieredTenureBadge) {
    const tieredTenureBadgeData = TieredTenureBadgeUtils.getTieredTenureBadgeData(tieredTenureBadge);
    ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
    if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
      if (tmp4.PREMIUM_TENURE_3_MONTH !== id) {
        if (tmp4.PREMIUM_TENURE_6_MONTH !== id) {
          if (tmp4.PREMIUM_TENURE_12_MONTH !== id) {
            if (tmp4.PREMIUM_TENURE_24_MONTH !== id) {
              if (tmp4.PREMIUM_TENURE_36_MONTH !== id) {
                if (tmp4.PREMIUM_TENURE_60_MONTH !== id) {
                  let formatToPlainStringResult = null;
                }
              }
            }
          }
          const intl = util.intl;
          const obj4 = { years: tenureReqNumMonths / 12 };
          formatToPlainStringResult = intl.formatToPlainString(util.t.qOdyDe, obj4);
        }
        cResult[0] = tieredTenureBadge;
        cResult[1] = formatToPlainStringResult;
      }
    }
    const intl2 = util.intl;
    erUSmA = util.t.erUSmA;
    obj = { months: tenureReqNumMonths };
    formatToPlainStringResult = intl2.formatToPlainString(erUSmA, obj);
    const erUSmAResult = TieredTenureBadgeUtils;
  } else {
    return cResult[1];
  }
}) : (() => {
  const tieredTenureBadge = useTenureBadging.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = tmp(7875).getTieredTenureBadgeData(tieredTenureBadge);
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
          const intl = tmp(1119).intl;
          const obj2 = { years: tenureReqNumMonths / 12 };
          formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t.qOdyDe, obj2);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = tmp(1119).intl;
    const obj3 = { months: tenureReqNumMonths };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t.erUSmA, obj3);
    const tmpResult = tmp(7875);
  }
});
export { getTenureBadgeRequirementString };
