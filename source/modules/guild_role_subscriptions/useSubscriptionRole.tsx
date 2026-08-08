// Module ID: 14463
// Function ID: 14464
// Name: useSubscriptionRole
// Dependencies: [1964, 14446, 589, 2]
// Exports: default

// Module 14463 (useSubscriptionRole)
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  const dependencyMap = _require(14446).useSubscriptionListing(editStateId);
  const obj = _require(14446);
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
