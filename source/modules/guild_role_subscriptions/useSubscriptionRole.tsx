// Module ID: 14543
// Function ID: 14544
// Name: useSubscriptionRole
// Dependencies: [1983, 14526, 589, 2]
// Exports: default

// Module 14543 (useSubscriptionRole)
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  const dependencyMap = _require(14526).useSubscriptionListing(editStateId);
  const obj = _require(14526);
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
