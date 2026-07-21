// Module ID: 5627
// Function ID: 48009
// Name: computeCanEveryoneInGuildSeeRoleSubscriptions
// Dependencies: []
// Exports: areRoleSubscriptionsVisibleInGuild, useShowRoleSubscriptionsInChannelList

// Module 5627 (computeCanEveryoneInGuildSeeRoleSubscriptions)
function computeCanEveryoneInGuildSeeRoleSubscriptions(guildId) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_4, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guild = obj.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    const features = guild.features;
    const result = arg1(dependencyMap[3]).isCreatorMonetizationEnabledGuild(guild);
    const tmp9 = !result || !features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    let isViewingServerShopResult = !tmp9;
    if (tmp9) {
      isViewingServerShopResult = obj2.isViewingServerShop(guildId);
    }
    return isViewingServerShopResult;
  }
}
function useRoleSubscriptionsVisibleInGuild(id1) {
  const arg1 = id1;
  const tmp = importDefault(dependencyMap[4])(id1);
  const items = [closure_4, closure_3];
  const items1 = [id1];
  let stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const items = [closure_4, closure_3];
    return callback(arg0, items);
  }, items1);
  const obj = arg1(dependencyMap[5]);
  let tmp3 = !arg1(dependencyMap[6]).useShouldHideGuildPurchaseEntryPoints(id1).shouldHideGuildPurchaseEntryPoints;
  if (tmp3) {
    if (!stateFromStores) {
      stateFromStores = tmp;
    }
    tmp3 = stateFromStores;
  }
  return tmp3;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(guildId, unsafeMutableRoles) {
  const tmp = computeCanEveryoneInGuildSeeRoleSubscriptions(guildId);
  let hasRoleSubscriptionsInGuild = tmp;
  if (!tmp) {
    hasRoleSubscriptionsInGuild = unsafeMutableRoles(dependencyMap[4]).computeHasRoleSubscriptionsInGuild(guildId, unsafeMutableRoles);
    const obj = unsafeMutableRoles(dependencyMap[4]);
  }
  return hasRoleSubscriptionsInGuild;
};
export { useRoleSubscriptionsVisibleInGuild };
export const useShowRoleSubscriptionsInChannelList = function useShowRoleSubscriptionsInChannelList(id) {
  let tmp = useRoleSubscriptionsVisibleInGuild(id);
  if (tmp) {
    tmp = !obj.useGuildEligibleForGuildProducts(id) || true;
    const tmp2 = !obj.useGuildEligibleForGuildProducts(id) || true;
  }
  return tmp;
};
