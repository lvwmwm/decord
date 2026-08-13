// Module ID: 5874
// Function ID: 5875
// Name: useShouldShowInlineGuildCapUpsell
// Dependencies: [1910, 1922, 676, 589, 5875, 4007, 2]
// Exports: hasIncreasedGuildCap, hideInlineGuildCapUpsell, isAtGuildCapAndNonPremium, useShouldShowInlineGuildCapUpsell

// Module 5874 (useShouldShowInlineGuildCapUpsell)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MAX_USER_GUILDS } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [createGuildRecordFromRust];
  let stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const obj = require(589) /* initialize */;
  const items1 = [require(5875) /* HotspotStore */.HotspotStore];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => {
    const HotspotStore = callback(5875).HotspotStore;
    return HotspotStore.hasHotspot(callback(5875).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const obj2 = require(589) /* initialize */;
  const items2 = [mergeGuildAvatar];
  const stateFromStoresObject = require(589) /* initialize */.useStateFromStoresObject(items2, () => !callback2(4007).isPremium(currentUser.getCurrentUser()));
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
};
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  require(5875) /* HotspotStore */.hideHotspot(require(5875) /* HotspotStore */.HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export const hasIncreasedGuildCap = function hasIncreasedGuildCap(currentUser) {
  let result = importDefault(4007).canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
};
export const isAtGuildCapAndNonPremium = function isAtGuildCapAndNonPremium() {
  let tmp = guildCount.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    currentUser = currentUser.getCurrentUser();
    let result = importDefault(4007).canUseIncreasedGuildCap(currentUser);
    if (!result) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      result = true === isStaffResult;
    }
    tmp = !result;
    const obj2 = importDefault(4007);
  }
  return tmp;
};
