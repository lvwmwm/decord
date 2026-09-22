// Module ID: 13821
// Function ID: 13822
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1371, 1373, 4294, 1377, 1379, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 13821 (useHasXboxMonthlyOrbsPerk)
import initialize from "initialize" /* 504 */;
import PremiumUtils from "PremiumUtils" /* 4294 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export const hasCrepeMonthlyOrbsPerk = function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = tmp2(1377).getPerkSource(perks, tmp2(1379).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp2(1379).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
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
      const perkSource = tmp(1377).getPerkSource(perks, tmp(1379).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp(1379).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
      const tmpResult2 = tmp(1377);
    }
    tmpResult = tmp(4294);
  }
  return flag;
};
