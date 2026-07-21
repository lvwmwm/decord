// Module ID: 12246
// Function ID: 93918
// Name: useNextTenureBadge
// Dependencies: []
// Exports: useNextTenureBadge

// Module 12246 (useNextTenureBadge)
const _module = require(dependencyMap[0]);
({ TIERED_TENURE_BADGE_ORDER: closure_2, TENURE_BADGES: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = function useNextTenureBadge() {
  const tieredTenureBadgeData = require(dependencyMap[1]).useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === require(dependencyMap[1]).TieredTenureBadgeStatus.UPCOMING) {
    return tieredTenureBadgeData;
  } else {
    const index = closure_2.indexOf(tieredTenureBadgeData.id);
    let tmp7 = null;
    if (null != closure_2[index + 1]) {
      tmp7 = null;
      if (-1 !== index) {
        tmp7 = closure_3[tmp6];
      }
    }
    return tmp7;
  }
  const obj = require(dependencyMap[1]);
};
