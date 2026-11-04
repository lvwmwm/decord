// Module ID: 11171
// Function ID: 11172
// Name: markChannelUnread
// Dependencies: [6977, 11172, 504, 2]
// Exports: default, useCanMarkChannelUnread

// Module 11171 (markChannelUnread)
import ReadStateStore2 from "ReadStateStore" /* 6977 */;
import markUnreadDefault from "markUnread" /* 11172 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReadStateStore = ReadStateStore2;
let _require;

const ReadState = ReadStateStore2.ReadState;
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
};
export function useCanMarkChannelUnread(channel) {
  _require = channel;
  const items = [ReadStateStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const tmp = ReadStateStore.canBeUnread(channel.id) && ReadStateStore.hasLastMessage(channel.id) && !channel.isCategory();
    return tmp;
  });
}
