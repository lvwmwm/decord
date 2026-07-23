// Module ID: 12655
// Function ID: 98494
// Name: hasCrepeMonthlyOrbsPerk
// Dependencies: [1849, 1851, 3776, 1865, 1867, 566, 2]
// Exports: useHasXboxMonthlyOrbsPerk

// Module 12655 (hasCrepeMonthlyOrbsPerk)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (null != currentUser) {
        perks = currentUser.perks;
      }
      const perkSource = require(1865) /* parseServerPerkConfigKind */.getPerkSource(perks, require(1867) /* _callSuper */.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(require(1867) /* _callSuper */.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
  }
  return false;
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export { hasCrepeMonthlyOrbsPerk };
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [_isNativeReflectConstruct];
  return hasCrepeMonthlyOrbsPerk(require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser()));
};
