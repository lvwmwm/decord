// Module ID: 14039
// Function ID: 14040
// Name: useHasXboxMonthlyOrbsPerk
// Dependencies: [1376, 1378, 4450, 1382, 1384, 558, 568, 504, 2]
// Exports: hasCrepeMonthlyOrbsPerk

// Module 14039 (useHasXboxMonthlyOrbsPerk)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import UserStore from "UserStore" /* 1376 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const ReactCompilerGating = fn(558);
function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = tmp2(1382).getPerkSource(perks, tmp2(1384).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp2(1384).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = PremiumUtils;
  }
  return false;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export { hasCrepeMonthlyOrbsPerk };
export const useHasXboxMonthlyOrbsPerk = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let flag = false;
    if (obj3.canUseMonthlyOrbs(stateFromStores)) {
      flag = false;
      if (!tmpResult3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
        let perks;
        if (stateFromStores != null) {
          perks = stateFromStores.perks;
        }
        const perkSource = tmp(1382).getPerkSource(perks, tmp(1384).Perk.MONTHLY_ORBS);
        let hasItem = null != perkSource;
        if (hasItem) {
          hasItem = perkSource.includes(tmp(1384).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        flag = hasItem;
        const tmpResult4 = tmp(1382);
      }
      tmpResult3 = tmp(4450);
    }
    cResult[2] = stateFromStores;
    cResult[3] = flag;
    let tmp8 = flag;
    obj3 = PremiumUtilsDefault;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
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
      const perkSource = tmp(1382).getPerkSource(perks, tmp(1384).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp(1384).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
      const tmpResult2 = tmp(1382);
    }
    tmpResult = tmp(4450);
  }
  return flag;
});
