// Module ID: 15262
// Function ID: 15263
// Name: useNextTenureBadge
// Dependencies: [1390, 15257, 2]
// Exports: useNextTenureBadge

// Module 15262 (useNextTenureBadge)
import useTenureBadging from "useTenureBadging" /* 15257 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ TIERED_TENURE_BADGE_ORDER: c2, TENURE_BADGES: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export function useNextTenureBadge() {
  const obj = useTenureBadging;
  const tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === useTenureBadging.TieredTenureBadgeStatus.UPCOMING) {
    return tieredTenureBadgeData;
  } else {
    const index = React2.indexOf(tieredTenureBadgeData.id);
    let tmp7 = null;
    if (null != React2[index + 1]) {
      tmp7 = null;
      if (-1 !== index) {
        tmp7 = _false[tmp6];
      }
    }
    return tmp7;
  }
}
