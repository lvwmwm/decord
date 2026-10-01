// Module ID: 12828
// Function ID: 12829
// Name: useVibegrationsChannelChatBadge
// Dependencies: [4851, 504, 2]
// Exports: default

// Module 12828 (useVibegrationsChannelChatBadge)
import ReadStateStore from "ReadStateStore" /* 4851 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelChatBadge.tsx");

export default function useVibegrationsChannelChatBadge(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let obj4;
    const mentionCount = ReadStateStore.getMentionCount(closure_0);
    const obj = ReadStateStore;
    const tmp = closure_0;
    if (mentionCount > 0) {
      obj4 = { badge: "mention", mentionCount };
      const obj2 = { badge: "mention", mentionCount };
    } else if (obj.hasUnread(tmp)) {
      obj4 = { badge: "unread", mentionCount };
      const obj3 = { badge: "unread", mentionCount };
    } else {
      obj4 = { badge: null, mentionCount };
    }
    return obj4;
  }, items1);
};
