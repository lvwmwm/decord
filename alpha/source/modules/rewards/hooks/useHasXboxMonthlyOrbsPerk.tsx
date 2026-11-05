// Module ID: 15873
// Function ID: 15874
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1385, 1387, 2176, 1391, 1393, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 15873 (useHasXboxMonthlyOrbsPerk)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PerksStateUtils from "PerksStateUtils" /* 1391 */;
import PremiumUtils from "PremiumUtils" /* 2176 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export function hasCrepeMonthlyOrbsPerk(currentUser) {
  const obj = PremiumUtilsDefault;
  if (obj.canUseMonthlyOrbs(currentUser)) {
    const obj2 = PremiumUtils;
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      const getPerkSource = PerksStateUtils.getPerkSource;
      PerksStateUtils;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = getPerkSource(perks, tmp2(1393).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp2(1393).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      return hasItem;
    }
  }
  return false;
}
export function useHasXboxMonthlyOrbsPerk() {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag = false;
  const obj2 = PremiumUtilsDefault;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    flag = false;
    const tmpResult = PremiumUtils;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      let perks;
      const getPerkSource = PerksStateUtils.getPerkSource;
      PerksStateUtils;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = getPerkSource(perks, tmp(1393).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp(1393).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      flag = hasItem;
    }
  }
  return flag;
}
