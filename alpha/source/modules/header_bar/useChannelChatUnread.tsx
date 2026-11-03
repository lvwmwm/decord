// Module ID: 9959
// Function ID: 9960
// Name: useChannelChatUnread
// Dependencies: [6962, 504, 2]
// Exports: useChannelChatUnread

// Module 9959 (useChannelChatUnread)
import ReadStateStore from "ReadStateStore" /* 6962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/header_bar/useChannelChatUnread.tsx");

export function useChannelChatUnread(channelId) {
  _require = channelId;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [channelId];
  return obj.useStateFromStoresObject(items, () => {
    let num;
    const obj = { hasUnread: null != channelId && ReadStateStore.hasUnread(tmp), mentionCount: num };
    num = 0;
    if (null != channelId) {
      num = ReadStateStore.getMentionCount(tmp);
    }
    return obj;
  }, items1);
}
