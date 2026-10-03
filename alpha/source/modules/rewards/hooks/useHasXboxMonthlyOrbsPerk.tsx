// Module ID: 13540
// Function ID: 13541
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1377, 1379, 4528, 1383, 1385, 558, 576, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk

// Module 13540 (useHasXboxMonthlyOrbsPerk)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PerksStateUtils from "PerksStateUtils" /* 1383 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let flag = false;
    const obj3 = PremiumUtilsDefault;
    if (obj3.canUseMonthlyOrbs(stateFromStores)) {
      flag = false;
      const tmpResult3 = PremiumUtils;
      if (!tmpResult3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
        let perks;
        const getPerkSource = PerksStateUtils.getPerkSource;
        PerksStateUtils;
        if (stateFromStores != null) {
          perks = stateFromStores.perks;
        }
        const perkSource = getPerkSource(perks, tmp(1385).Perk.MONTHLY_ORBS);
        const hasItem = null != perkSource && perkSource.includes(tmp(1385).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        flag = hasItem;
      }
    }
    cResult[2] = stateFromStores;
    cResult[3] = flag;
    tmp8 = flag;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
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
      const perkSource = getPerkSource(perks, tmp(1385).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp(1385).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      flag = hasItem;
    }
  }
  return flag;
});
function hasCrepeMonthlyOrbsPerk(currentUser) {
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
      const perkSource = getPerkSource(perks, tmp2(1385).Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(tmp2(1385).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      return hasItem;
    }
  }
  return false;
}
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export { hasCrepeMonthlyOrbsPerk };
export const useHasXboxMonthlyOrbsPerk = tmp2;
