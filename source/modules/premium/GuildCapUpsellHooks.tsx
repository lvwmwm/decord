// Module ID: 5595
// Function ID: 47560
// Name: hasIncreasedGuildCap
// Dependencies: [1838, 1849, 653, 566, 5596, 3776, 2]
// Exports: hideInlineGuildCapUpsell, isAtGuildCapAndNonPremium, useShouldShowInlineGuildCapUpsell

// Module 5595 (hasIncreasedGuildCap)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MAX_USER_GUILDS } from "ME";

const require = arg1;
function hasIncreasedGuildCap(currentUser) {
  let result = importDefault(3776).canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
}
let result = require("ME").fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [_createForOfIteratorHelperLoose];
  let stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getGuildCount() >= 95);
  const obj = require(566) /* initialize */;
  const items1 = [require(5596) /* HotspotStore */.HotspotStore];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => {
    const HotspotStore = outer1_0(outer1_2[4]).HotspotStore;
    return HotspotStore.hasHotspot(outer1_0(outer1_2[4]).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const obj2 = require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct];
  const stateFromStoresObject = require(566) /* initialize */.useStateFromStoresObject(items2, () => !outer1_1(outer1_2[5]).isPremium(outer1_4.getCurrentUser()));
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
};
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  require(5596) /* HotspotStore */.hideHotspot(require(5596) /* HotspotStore */.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export { hasIncreasedGuildCap };
export const isAtGuildCapAndNonPremium = function isAtGuildCapAndNonPremium() {
  let tmp = guildCount.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    tmp = !hasIncreasedGuildCap(currentUser.getCurrentUser());
  }
  return tmp;
};
