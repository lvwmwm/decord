// Module ID: 14643
// Function ID: 14644
// Name: useSubscriptionRole
// Dependencies: [1984, 14626, 589, 2]
// Exports: default

// Module 14643 (useSubscriptionRole)
import closure_2 from "createGuildRoleRecordFromRust" /* 1984 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  dependencyMap = _require(14626).useSubscriptionListing(editStateId);
  const obj = _require(14626);
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
