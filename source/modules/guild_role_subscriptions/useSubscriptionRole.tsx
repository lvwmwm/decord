// Module ID: 14746
// Function ID: 14747
// Name: useSubscriptionRole
// Dependencies: [1985, 14729, 589, 2]
// Exports: default

// Module 14746 (useSubscriptionRole)
import closure_2 from "createGuildRoleRecordFromRust" /* 1985 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  dependencyMap = _require(14729).useSubscriptionListing(editStateId);
  const obj = _require(14729);
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = closure_1_2.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};
