// Module ID: 12592
// Function ID: 97247
// Name: computeCanEveryoneInGuildSeeRoleSubscriptions
// Dependencies: [1910, 1838, 653, 7752, 12593, 566, 12594, 12598, 2]
// Exports: areRoleSubscriptionsVisibleInGuild, useShowRoleSubscriptionsInChannelList

// Module 12592 (computeCanEveryoneInGuildSeeRoleSubscriptions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
function computeCanEveryoneInGuildSeeRoleSubscriptions(guildId) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guild = obj.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    const features = guild.features;
    const result = require(7752) /* isCreatorMonetizationEnabledGuild */.isCreatorMonetizationEnabledGuild(guild);
    const tmp9 = !result || !features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    let isViewingServerShopResult = !tmp9;
    if (tmp9) {
      isViewingServerShopResult = obj2.isViewingServerShop(guildId);
    }
    return isViewingServerShopResult;
  }
}
function useRoleSubscriptionsVisibleInGuild(id1) {
  const _require = id1;
  const tmp = importDefault(12593)(id1);
  let items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [id1];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    const items = [outer1_4, outer1_3];
    return outer1_6(closure_0, items);
  }, items1);
  const obj = _require(566);
  let tmp3 = !_require(12594).useShouldHideGuildPurchaseEntryPoints(id1).shouldHideGuildPurchaseEntryPoints;
  if (tmp3) {
    if (!stateFromStores) {
      stateFromStores = tmp;
    }
    tmp3 = stateFromStores;
  }
  return tmp3;
}
let result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(guildId, unsafeMutableRoles) {
  const tmp = computeCanEveryoneInGuildSeeRoleSubscriptions(guildId);
  let hasRoleSubscriptionsInGuild = tmp;
  if (!tmp) {
    hasRoleSubscriptionsInGuild = require(12593) /* _createForOfIteratorHelperLoose */.computeHasRoleSubscriptionsInGuild(guildId, unsafeMutableRoles);
    const obj = require(12593) /* _createForOfIteratorHelperLoose */;
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
