// Module ID: 20596
// Function ID: 20597
// Name: useRoleSubscriptionEmojis
// Dependencies: [19, 6906, 504, 5197, 2]
// Exports: default

// Module 20596 (useRoleSubscriptionEmojis)
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [];
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  items = [EmojiStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => EmojiStore.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return react.useMemo(() => {
    let found;
    const arr = stateFromStores;
    if (null == stateFromStores) {
      found = items;
    } else {
      found = arr.filter((item) => {
        const obj = closure_0(stateFromStores[3]);
        return obj.isRoleSubscriptionEmoji(item, closure_1_0);
      });
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;
