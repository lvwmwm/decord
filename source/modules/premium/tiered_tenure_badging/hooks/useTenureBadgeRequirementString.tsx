// Module ID: 8361
// Function ID: 66896
// Name: getTenureBadgeRequirementString
// Dependencies: [1852, 8362, 5651, 1212, 2]
// Exports: useTenureBadgeRequirementString

// Module 8361 (getTenureBadgeRequirementString)
import { TieredTenureBadge } from "GuildFeatures";

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
        const intl = require(1212) /* getSystemLocale */.intl;
        let obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { months: tenureReqNumMonths };
  return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.erUSmA, obj);
}
const result = require("getTieredTenureBadgeData").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  const tieredTenureBadge = require(8362) /* useTieredTenureBadge */.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = require(5651) /* getTieredTenureBadgeData */.getTieredTenureBadgeData(tieredTenureBadge);
    return getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths);
  }
  const obj = require(8362) /* useTieredTenureBadge */;
};
export { getTenureBadgeRequirementString };
