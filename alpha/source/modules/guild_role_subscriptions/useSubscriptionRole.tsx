// Module ID: 17464
// Function ID: 17465
// Name: useSubscriptionRole
// Dependencies: [5047, 17449, 504, 2]
// Exports: default

// Module 17464 (useSubscriptionRole)
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  let closure_0;
  let closure_1;
  _require = arg0;
  const obj = require("GuildRoleSubscriptionsHooks");
  dependencyMap = obj.useSubscriptionListing(editStateId);
  const items = [GuildRoleStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = GuildRoleStore.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};
