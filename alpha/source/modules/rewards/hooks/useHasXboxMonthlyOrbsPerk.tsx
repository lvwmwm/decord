// Module ID: 14920
// Function ID: 14921
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1388, 1390, 2174, 1394, 1401, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk, useHasXboxMonthlyOrbsPerk

// Module 14920 (useHasXboxMonthlyOrbsPerk)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PerksStateUtils from "PerksStateUtils" /* 1394 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import UserStore from "UserStore" /* 1388 */;
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
    const perkSource = getPerkSource(perks, tmp4(1401).Perk.MONTHLY_ORBS);
    const hasItem = null != perkSource && perkSource.includes(tmp4(1401).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
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
      const perkSource = getPerkSource(perks, tmp(1401).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp(1401).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      flag2 = hasItem;
    } else {
      flag2 = false;
      PremiumUtils;
    }
  }
  return flag2;
}
