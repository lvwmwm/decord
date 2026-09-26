// Module ID: 6668
// Function ID: 6669
// Name: useRoleSubscriptionsVisibleInGuild
// Dependencies: [2101, 2067, 1074, 6669, 6670, 504, 6671, 6676, 2]
// Exports: areRoleSubscriptionsVisibleInGuild, useRoleSubscriptionsVisibleInGuild, useShowRoleSubscriptionsInChannelList

// Module 6668 (useRoleSubscriptionsVisibleInGuild)
import useIsCreatorMonetizationEnabledGuild from "useIsCreatorMonetizationEnabledGuild" /* 6669 */;
import useHasRoleSubscriptionInGuild from "useHasRoleSubscriptionInGuild" /* 6670 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;
const useHasRoleSubscriptionInGuildDefault = useHasRoleSubscriptionInGuild;

require = fn;
function computeCanEveryoneInGuildSeeRoleSubscriptions(id1, items) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, ImpersonateStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guild = obj.getGuild(id1);
  if (null == guild) {
    return false;
  } else {
    const result = useIsCreatorMonetizationEnabledGuild.isCreatorMonetizationEnabledGuild(guild);
    const features = guild.features;
    let tmp9 = !result;
    if (result) {
      tmp9 = !features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    let isViewingServerShopResult = !tmp9;
    if (tmp9) {
      isViewingServerShopResult = obj2.isViewingServerShop(id1);
    }
    return isViewingServerShopResult;
  }
}
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(id1, arg1) {
  let hasRoleSubscriptionsInGuild = computeCanEveryoneInGuildSeeRoleSubscriptions(id1);
  if (!hasRoleSubscriptionsInGuild) {
    hasRoleSubscriptionsInGuild = useHasRoleSubscriptionInGuild.computeHasRoleSubscriptionsInGuild(id1, arg1);
  }
  return hasRoleSubscriptionsInGuild;
};
export const useRoleSubscriptionsVisibleInGuild = function useRoleSubscriptionsVisibleInGuild(id1) {
  _require = id1;
  const tmp = useHasRoleSubscriptionInGuildDefault(id1);
  const items = [GuildStore, ImpersonateStore];
  const items1 = [id1];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore, ImpersonateStore];
    return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
  }, items1);
  const obj = require("initialize");
  const shouldHideGuildPurchaseEntryPoints = require("CreatorMonetizationRestrictionsHooks").useShouldHideGuildPurchaseEntryPoints(id1).shouldHideGuildPurchaseEntryPoints;
  let tmp3 = !shouldHideGuildPurchaseEntryPoints;
  if (!shouldHideGuildPurchaseEntryPoints) {
    if (!stateFromStores) {
      stateFromStores = tmp;
    }
    tmp3 = stateFromStores;
  }
  return tmp3;
};
export const useShowRoleSubscriptionsInChannelList = function useShowRoleSubscriptionsInChannelList(id) {
  _require = id;
  const tmp2 = useHasRoleSubscriptionInGuildDefault(id);
  const tmp3 = _require;
  let items = [GuildStore, ImpersonateStore];
  const items1 = [id];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore, ImpersonateStore];
    return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
  }, items1);
  const obj = require("initialize");
  const shouldHideGuildPurchaseEntryPoints = require("CreatorMonetizationRestrictionsHooks").useShouldHideGuildPurchaseEntryPoints(id).shouldHideGuildPurchaseEntryPoints;
  let tmp5 = !shouldHideGuildPurchaseEntryPoints;
  if (!shouldHideGuildPurchaseEntryPoints) {
    if (!stateFromStores) {
      stateFromStores = tmp2;
    }
    tmp5 = stateFromStores;
  }
  const obj2 = require("CreatorMonetizationRestrictionsHooks");
  const guildEligibleForGuildProducts = tmp3(6676).useGuildEligibleForGuildProducts(id);
  if (tmp5) {
    let flag = !guildEligibleForGuildProducts;
    if (guildEligibleForGuildProducts) {
      flag = true;
    }
    tmp5 = flag;
  }
  return tmp5;
};
