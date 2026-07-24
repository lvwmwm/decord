// Module ID: 16492
// Function ID: 128483
// Name: items
// Dependencies: [31, 4991, 566, 4996, 2]
// Exports: default

// Module 16492 (items)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let items = [];
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => outer1_3.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      let found = outer1_4;
    } else {
      found = stateFromStores.filter((roles) => callback(stateFromStores[3]).isRoleSubscriptionEmoji(roles, outer1_0));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;
