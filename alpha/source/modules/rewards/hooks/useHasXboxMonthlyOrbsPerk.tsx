// Module ID: 15574
// Function ID: 15575
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1384, 1386, 2048, 1390, 1392, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 15574 (useHasXboxMonthlyOrbsPerk)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PerksStateUtils from "PerksStateUtils" /* 1390 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import UserStore from "UserStore" /* 1384 */;
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
      const perkSource = getPerkSource(perks, tmp2(1392).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp2(1392).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
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
      const perkSource = getPerkSource(perks, tmp(1392).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp(1392).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      flag = hasItem;
    }
  }
  return flag;
}
