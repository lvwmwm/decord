// Module ID: 5594
// Function ID: 47540
// Name: hasIncreasedGuildCap
// Dependencies: []
// Exports: hideInlineGuildCapUpsell, isAtGuildCapAndNonPremium, useShouldShowInlineGuildCapUpsell

// Module 5594 (hasIncreasedGuildCap)
function hasIncreasedGuildCap(currentUser) {
  let result = importDefault(dependencyMap[5]).canUseIncreasedGuildCap(currentUser);
  if (!result) {
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    result = true === isStaffResult;
  }
  return result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MAX_USER_GUILDS = arg1(dependencyMap[2]).MAX_USER_GUILDS;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/GuildCapUpsellHooks.tsx");

export const useShouldShowInlineGuildCapUpsell = function useShouldShowInlineGuildCapUpsell() {
  const items = [closure_3];
  let stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => guildCount.getGuildCount() >= 95);
  const obj = arg1(dependencyMap[3]);
  const items1 = [arg1(dependencyMap[4]).HotspotStore];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => {
    const HotspotStore = callback(closure_2[4]).HotspotStore;
    return HotspotStore.hasHotspot(callback(closure_2[4]).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
  });
  const obj2 = arg1(dependencyMap[3]);
  const items2 = [closure_4];
  const stateFromStoresObject = arg1(dependencyMap[3]).useStateFromStoresObject(items2, () => !callback2(closure_2[5]).isPremium(currentUser.getCurrentUser()));
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = stateFromStoresObject;
  }
  return stateFromStores;
};
export const hideInlineGuildCapUpsell = function hideInlineGuildCapUpsell() {
  arg1(dependencyMap[4]).hideHotspot(arg1(dependencyMap[4]).HotspotLocations.GUILD_CAP_INLINE_UPSELL);
};
export { hasIncreasedGuildCap };
export const isAtGuildCapAndNonPremium = function isAtGuildCapAndNonPremium() {
  let tmp = guildCount.getGuildCount() >= MAX_USER_GUILDS;
  if (tmp) {
    tmp = !hasIncreasedGuildCap(currentUser.getCurrentUser());
  }
  return tmp;
};
