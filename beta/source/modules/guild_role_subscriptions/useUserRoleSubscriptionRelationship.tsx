// Module ID: 14751
// Function ID: 14752
// Name: useUserRoleSubscriptionRelationship
// Dependencies: [5772, 14750, 504, 2]
// Exports: default, getUserRoleSubscriptionRelationship

// Module 14751 (useUserRoleSubscriptionRelationship)
import get_initialized from "get initialized" /* 504 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5772 */;
import size from "module_2" /* 2 */;

const f100753 = (item) => {
  if (userSubscriptionRoles.getUserSubscriptionRoles(item).size > 0) {
    c1 = true;
  }
};
const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  const obj = get_initialized;
  let items = [SubscriptionRoleStore];
  return obj.useStateFromStores(items, () => {
    let IN_SUBSCRIPTION_SERVER;
    let obj;
    const items = [SubscriptionRoleStore];
    [obj] = items;
    const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
    let c1 = false;
    const item = guildIdsWithPurchasableRoles.forEach(f100753);
    const tmp2 = c1;
    if (tmp2) {
      IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
    } else if (0 === guildIdsWithPurchasableRoles.size) {
      IN_SUBSCRIPTION_SERVER = constants.NONE;
    } else {
      IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
    }
    return IN_SUBSCRIPTION_SERVER;
  });
};
export const getUserRoleSubscriptionRelationship = function getUserRoleSubscriptionRelationship() {
  let IN_SUBSCRIPTION_SERVER;
  let obj;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [SubscriptionRoleStore];
    tmp = items;
  }
  [obj] = tmp;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  let c1 = false;
  const item = guildIdsWithPurchasableRoles.forEach(f100753);
  const tmp4 = c1;
  if (tmp4) {
    IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
  } else if (0 === guildIdsWithPurchasableRoles.size) {
    IN_SUBSCRIPTION_SERVER = constants.NONE;
  } else {
    IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
  }
  return IN_SUBSCRIPTION_SERVER;
};
