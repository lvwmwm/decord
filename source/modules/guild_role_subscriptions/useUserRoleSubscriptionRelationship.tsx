// Module ID: 14095
// Function ID: 108396
// Name: getUserRoleSubscriptionRelationship
// Dependencies: [4992, 14094, 566, 2]
// Exports: default

// Module 14095 (getUserRoleSubscriptionRelationship)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserGuildRoleSubscriptionRelationship as closure_3 } from "MAX_SUBSCRIPTION_TIERS";

const require = arg1;
function getUserRoleSubscriptionRelationship() {
  let obj;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_isNativeReflectConstruct];
    tmp = items;
  }
  [obj] = tmp;
  let c1;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  c1 = false;
  const item = guildIdsWithPurchasableRoles.forEach((arg0) => {
    if (userSubscriptionRoles.getUserSubscriptionRoles(arg0).size > 0) {
      let c1 = true;
    }
  });
  if (c1) {
    let IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
  } else if (0 === guildIdsWithPurchasableRoles.size) {
    IN_SUBSCRIPTION_SERVER = constants.NONE;
  } else {
    IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
  }
  return IN_SUBSCRIPTION_SERVER;
}
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  let items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const items = [outer1_2];
    return outer1_4(items);
  });
};
export { getUserRoleSubscriptionRelationship };
