// Module ID: 14008
// Function ID: 14009
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1372, 1374, 4415, 1378, 1380, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 14008 (useHasXboxMonthlyOrbsPerk)
import initialize from "initialize" /* 504 */;
import PremiumUtils from "PremiumUtils" /* 4415 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export const hasCrepeMonthlyOrbsPerk = function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = tmp2(1378).getPerkSource(perks, tmp2(1380).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp2(1380).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = PremiumUtils;
  }
  return false;
};
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    flag = false;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = tmp(1378).getPerkSource(perks, tmp(1380).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp(1380).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
      const tmpResult2 = tmp(1378);
    }
    tmpResult = tmp(4415);
  }
  return flag;
};
