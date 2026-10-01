// Module ID: 6668
// Function ID: 6669
// Name: useRoleSubscriptionsVisibleInGuild
// Dependencies: [2101, 2067, 1074, 6669, 6670, 504, 6671, 6676, 2]
// Exports: areRoleSubscriptionsVisibleInGuild, useRoleSubscriptionsVisibleInGuild, useShowRoleSubscriptionsInChannelList

// Module 6668 (useRoleSubscriptionsVisibleInGuild)
import Constants from "Constants" /* 1074 */;
import useIsCreatorMonetizationEnabledGuild from "useIsCreatorMonetizationEnabledGuild" /* 6669 */;
import useHasRoleSubscriptionInGuild from "useHasRoleSubscriptionInGuild" /* 6670 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useHasRoleSubscriptionInGuildDefault = useHasRoleSubscriptionInGuild;
let _require;

const f82762 = () => {
  const items = [GuildStore, ImpersonateStore];
  return computeCanEveryoneInGuildSeeRoleSubscriptions(id, items);
};
function computeCanEveryoneInGuildSeeRoleSubscriptions(c0, items) {
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, ImpersonateStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guild = obj.getGuild(c0);
  if (null == guild) {
    return false;
  } else {
    const obj3 = useIsCreatorMonetizationEnabledGuild;
    const result = obj3.isCreatorMonetizationEnabledGuild(guild);
    const features = guild.features;
    let tmp9 = !result;
    if (result) {
      tmp9 = !features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    let isViewingServerShopResult = !tmp9;
    if (tmp9) {
      isViewingServerShopResult = obj2.isViewingServerShop(c0);
    }
    return isViewingServerShopResult;
  }
}
const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(c0, arg1) {
  let hasRoleSubscriptionsInGuild = computeCanEveryoneInGuildSeeRoleSubscriptions(c0);
  if (!hasRoleSubscriptionsInGuild) {
    const obj = useHasRoleSubscriptionInGuild;
    hasRoleSubscriptionsInGuild = obj.computeHasRoleSubscriptionsInGuild(c0, arg1);
  }
  return hasRoleSubscriptionsInGuild;
};
export const useRoleSubscriptionsVisibleInGuild = function useRoleSubscriptionsVisibleInGuild(id1) {
  _require = id1;
  const items = [GuildStore, ImpersonateStore];
  const items1 = [id1];
  const tmp = useHasRoleSubscriptionInGuildDefault(id1);
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f82762, items1);
  const obj2 = require("CreatorMonetizationRestrictionsHooks");
  let tmp3 = !obj2.useShouldHideGuildPurchaseEntryPoints(id1).shouldHideGuildPurchaseEntryPoints;
  if (tmp3) {
    if (!stateFromStores) {
      stateFromStores = tmp;
    }
    tmp3 = stateFromStores;
  }
  return tmp3;
};
export const useShowRoleSubscriptionsInChannelList = function useShowRoleSubscriptionsInChannelList(id) {
  _require = id;
  let items = [GuildStore, ImpersonateStore];
  const items1 = [id];
  const tmp2 = useHasRoleSubscriptionInGuildDefault(id);
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f82762, items1);
  const obj2 = require("CreatorMonetizationRestrictionsHooks");
  let tmp5 = !obj2.useShouldHideGuildPurchaseEntryPoints(id).shouldHideGuildPurchaseEntryPoints;
  const tmp3 = _require;
  if (tmp5) {
    if (!stateFromStores) {
      stateFromStores = tmp2;
    }
    tmp5 = stateFromStores;
  }
  const tmp3Result = tmp3(6676);
  const guildEligibleForGuildProducts = tmp3Result.useGuildEligibleForGuildProducts(id);
  if (tmp5) {
    let flag = !guildEligibleForGuildProducts;
    if (guildEligibleForGuildProducts) {
      flag = true;
    }
    tmp5 = flag;
  }
  return tmp5;
};
