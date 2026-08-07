// Module ID: 16751
// Function ID: 16752
// Name: items
// Dependencies: [19, 5175, 589, 5180, 2]
// Exports: default

// Module 16751 (items)
import noop from "noop";
import getEmojiToGroupId from "getEmojiToGroupId";

const require = arg1;
let items = [];
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  const _require = arg0;
  const items = [getEmojiToGroupId];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => outer1_3.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      let found = outer1_4;
    } else {
      found = stateFromStores.filter((roles) => outer1_0(outer1_1[3]).isRoleSubscriptionEmoji(roles, closure_0));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;
