// Module ID: 12721
// Function ID: 12722
// Name: useNextTenureBadge
// Dependencies: [1924, 9516, 2]
// Exports: useNextTenureBadge

// Module 12721 (useNextTenureBadge)
import GuildFeatures from "GuildFeatures";

let c3;
let obj1;
({ TIERED_TENURE_BADGE_ORDER: obj1, TENURE_BADGES: c3 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = function useNextTenureBadge() {
  const tieredTenureBadgeData = require(9516) /* usePremiumSince */.useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === tmp(9516).TieredTenureBadgeStatus.UPCOMING) {
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
  const obj = require(9516) /* usePremiumSince */;
  tmp = require;
};
