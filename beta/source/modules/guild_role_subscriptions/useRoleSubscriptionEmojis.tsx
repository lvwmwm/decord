// Module ID: 20039
// Function ID: 20040
// Name: useRoleSubscriptionEmojis
// Dependencies: [19, 6573, 504, 4867, 2]
// Exports: default

// Module 20039 (useRoleSubscriptionEmojis)
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6573 */;
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
