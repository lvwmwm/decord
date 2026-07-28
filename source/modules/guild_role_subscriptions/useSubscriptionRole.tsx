// Module ID: 14224
// Function ID: 109294
// Name: useSubscriptionRole
// Dependencies: [1911, 14207, 566, 2]
// Exports: default

// Module 14224 (useSubscriptionRole)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  const dependencyMap = _require(14207).useSubscriptionListing(editStateId);
  const obj = _require(14207);
  const items = [_createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != role_id) {
        role = outer1_2.getRole(closure_0, role_id.role_id);
      }
    }
    return role;
  });
};
