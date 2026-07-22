// Module ID: 13981
// Function ID: 106240
// Name: getUserRoleSubscriptionRelationship
// Dependencies: []
// Exports: default

// Module 13981 (getUserRoleSubscriptionRelationship)
function getUserRoleSubscriptionRelationship() {
  let obj;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [obj] = tmp;
  let closure_1;
  const guildIdsWithPurchasableRoles = obj.getGuildIdsWithPurchasableRoles();
  closure_1 = false;
  const item = guildIdsWithPurchasableRoles.forEach((arg0) => {
    if (userSubscriptionRoles.getUserSubscriptionRoles(arg0).size > 0) {
      let closure_1 = true;
    }
  });
  if (closure_1) {
    let IN_SUBSCRIPTION_SERVER = constants.SUBSCRIBED;
  } else if (0 === guildIdsWithPurchasableRoles.size) {
    IN_SUBSCRIPTION_SERVER = constants.NONE;
  } else {
    IN_SUBSCRIPTION_SERVER = constants.IN_SUBSCRIPTION_SERVER;
  }
  return IN_SUBSCRIPTION_SERVER;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).UserGuildRoleSubscriptionRelationship;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx");

export default function useUserRoleSubscriptionRelationship() {
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const items = [closure_2];
    return callback(items);
  });
};
export { getUserRoleSubscriptionRelationship };
