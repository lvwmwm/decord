// Module ID: 13646
// Function ID: 13647
// Name: useNextTenureBadge
// Dependencies: [1392, 558, 10529, 2]

// Module 13646 (useNextTenureBadge)
import useTenureBadging from "useTenureBadging" /* 10529 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ TIERED_TENURE_BADGE_ORDER: c2, TENURE_BADGES: c3 } = PremiumConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNextTenureBadge() {
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
}) : (function useNextTenureBadge() {
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
});
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = tmp3;
