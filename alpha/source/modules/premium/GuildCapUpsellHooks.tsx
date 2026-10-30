// Module ID: 7374
// Function ID: 7375
// Name: GuildCapUpsellHooks
// Dependencies: [4880, 1384, 1072, 504, 7375, 2048, 2]
// Exports: hasIncreasedGuildCap, hideInlineGuildCapUpsell, isAtGuildCapAndNonPremium, useShouldShowInlineGuildCapUpsell

// Module 7374 (GuildCapUpsellHooks)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import HotspotStore2 from "HotspotStore" /* 7375 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const MAX_USER_GUILDS = Constants.MAX_USER_GUILDS;
let result = size.fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export function useShouldShowInlineGuildCapUpsell() {
  let currentUser;
  let guildCount;
  let obj = get_initialized;
  const items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const useStateFromStores = get_initialized.useStateFromStores;
  const items1 = [];
  get_initialized;
  items1[0] = HotspotStore2.HotspotStore;
  const stateFromStores1 = useStateFromStores(items1, () => {
    const HotspotStore = HotspotStore2.HotspotStore;
    return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const items2 = [UserStore];
  const obj2 = get_initialized;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const obj = PremiumUtilsDefault;
    return !obj.isPremium(currentUser.getCurrentUser());
  });
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
}
export function hideInlineGuildCapUpsell() {
  const obj = HotspotStore2;
  obj.hideHotspot(HotspotStore2.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
}
export function hasIncreasedGuildCap(currentUser) {
  const obj = PremiumUtilsDefault;
  let result = obj.canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
}
export function isAtGuildCapAndNonPremium() {
  let tmp = GuildStore.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    const currentUser = UserStore.getCurrentUser();
    const obj2 = PremiumUtilsDefault;
    let result = obj2.canUseIncreasedGuildCap(currentUser);
    if (!result) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      result = true === isStaffResult;
    }
    tmp = !result;
  }
  return tmp;
}
