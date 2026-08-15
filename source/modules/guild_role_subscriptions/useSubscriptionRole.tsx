// Module ID: 14575
// Function ID: 14576
// Name: useSubscriptionRole
// Dependencies: [1983, 14558, 589, 2]
// Exports: default

// Module 14575 (useSubscriptionRole)
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  const dependencyMap = _require(14558).useSubscriptionListing(editStateId);
  const obj = _require(14558);
  const items = [createGuildRoleRecordFromRust];
  return _require(589).useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = outer1_2.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};
