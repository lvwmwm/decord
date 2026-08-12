// Module ID: 13057
// Function ID: 13058
// Name: hasCrepeMonthlyOrbsPerk
// Dependencies: [1922, 1924, 4007, 1938, 1940, 589, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 13057 (hasCrepeMonthlyOrbsPerk)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export const hasCrepeMonthlyOrbsPerk = function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = tmp2(1938).getPerkSource(perks, tmp2(1940).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp2(1940).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = require(4007) /* getPremiumPlanItem */;
  }
  return false;
};
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  let flag = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    let tmpResult = tmp(4007);
    flag = false;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      tmpResult = tmp(1938);
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = tmpResult.getPerkSource(perks, tmp(1940).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp(1940).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
    }
  }
  return flag;
};
