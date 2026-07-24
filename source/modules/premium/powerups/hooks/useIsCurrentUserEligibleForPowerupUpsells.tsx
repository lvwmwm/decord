// Module ID: 15045
// Function ID: 114573
// Name: checkPowerupUpsellEligibility
// Dependencies: [1917, 4970, 1849, 4023, 1851, 1872, 566, 2]
// Exports: default, getIsCurrentUserEligibleForPowerupUpsells

// Module 15045 (checkPowerupUpsellEligibility)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function checkPowerupUpsellEligibility(stateFromStores, stateFromStoresArray, arr2) {
  const _require = stateFromStores;
  let tmp = null != stateFromStores;
  if (tmp) {
    let tmp2 = !stateFromStores.isPremiumGroupMember();
    if (tmp2) {
      const tmp6 = !_require(1872).isPremium(stateFromStores, PremiumTypes.TIER_2);
      let tmp7 = !tmp6;
      if (tmp6) {
        const tmp8 = !stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
        let someResult = !tmp8;
        if (tmp8) {
          someResult = arr2.some((guildId) => {
            const member = outer1_2.getMember(guildId, stateFromStores.id);
            let premiumSince;
            if (null != member) {
              premiumSince = member.premiumSince;
            }
            return null != premiumSince;
          });
        }
        tmp7 = someResult;
      }
      tmp2 = tmp7;
      const obj = _require(1872);
    }
    tmp = tmp2;
  }
  return tmp;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

export default function useIsCurrentUserEligibleForPowerupUpsells() {
  let items = [closure_4];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj = require(566) /* initialize */;
  const items1 = [closure_5];
  const stateFromStoresArray = require(566) /* initialize */.useStateFromStoresArray(items1, () => {
    if (outer1_5.hasFetched) {
      const _Object = Object;
      let items = Object.values(outer1_5.boostSlots);
    } else {
      items = [];
    }
    return items;
  });
  const obj2 = require(566) /* initialize */;
  const items2 = [closure_3];
  return checkPowerupUpsellEligibility(stateFromStores, stateFromStoresArray, require(566) /* initialize */.useStateFromStores(items2, () => outer1_3.getFlattenedGuildIds()));
};
export const getIsCurrentUserEligibleForPowerupUpsells = function getIsCurrentUserEligibleForPowerupUpsells() {
  currentUser = currentUser.getCurrentUser();
  if (closure_5.hasFetched) {
    const _Object = Object;
    let items = Object.values(closure_5.boostSlots);
  } else {
    items = [];
  }
  return checkPowerupUpsellEligibility(currentUser, items, flattenedGuildIds.getFlattenedGuildIds());
};
