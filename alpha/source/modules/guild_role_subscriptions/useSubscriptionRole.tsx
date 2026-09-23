// Module ID: 15564
// Function ID: 15565
// Name: useSubscriptionRole
// Dependencies: [2099, 15547, 504, 2]
// Exports: default

// Module 15564 (useSubscriptionRole)
import GuildRoleStore from "GuildRoleStore" /* 2099 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  _require = arg0;
  dependencyMap = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(editStateId);
  const obj = require("GuildRoleSubscriptionsHooks");
  const items = [GuildRoleStore];
  return require("initialize").useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = GuildRoleStore.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};
