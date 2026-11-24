// Module ID: 15046
// Function ID: 15047
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1386, 1388, 2173, 1392, 1399, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 15046 (useHasXboxMonthlyOrbsPerk)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PerksStateUtils from "PerksStateUtils" /* 1392 */;
import PremiumUtils from "PremiumUtils" /* 2173 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export function hasCrepeMonthlyOrbsPerk(currentUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const obj = PremiumUtilsDefault;
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (flag) {
      PremiumUtils;
    }
    let perks;
    const getPerkSource = PerksStateUtils.getPerkSource;
    PerksStateUtils;
    if (currentUser != null) {
      perks = currentUser.perks;
    }
    const perkSource = getPerkSource(perks, tmp4(1399).Perk.MONTHLY_ORBS);
    const hasItem = null != perkSource && perkSource.includes(tmp4(1399).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
    return hasItem;
  }
  return false;
}
export function useHasXboxMonthlyOrbsPerk() {
  let currentUser;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = false;
  const obj2 = PremiumUtilsDefault;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    if (!flag) {
      let perks;
      const getPerkSource = PerksStateUtils.getPerkSource;
      PerksStateUtils;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = getPerkSource(perks, tmp(1399).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp(1399).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      flag2 = hasItem;
    } else {
      flag2 = false;
      PremiumUtils;
    }
  }
  return flag2;
}
