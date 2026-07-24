// Module ID: 12428
// Function ID: 96470
// Name: useNextTenureBadge
// Dependencies: [1851, 8602, 2]
// Exports: useNextTenureBadge

// Module 12428 (useNextTenureBadge)
import GuildFeatures from "GuildFeatures";

let closure_2;
let closure_3;
({ TIERED_TENURE_BADGE_ORDER: closure_2, TENURE_BADGES: closure_3 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = function useNextTenureBadge() {
  const tieredTenureBadgeData = require(8602) /* useTieredTenureBadge */.useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === require(8602) /* useTieredTenureBadge */.TieredTenureBadgeStatus.UPCOMING) {
    return tieredTenureBadgeData;
  } else {
    const index = closure_2.indexOf(tieredTenureBadgeData.id);
    let tmp7 = null;
    if (null != closure_2[index + 1]) {
      tmp7 = null;
      if (-1 !== index) {
        tmp7 = table[tmp6];
      }
    }
    return tmp7;
  }
  const obj = require(8602) /* useTieredTenureBadge */;
};
