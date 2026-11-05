// Module ID: 11179
// Function ID: 11180
// Name: markChannelUnread
// Dependencies: [6980, 11180, 504, 2]
// Exports: default, useCanMarkChannelUnread

// Module 11179 (markChannelUnread)
import ReadStateStore2 from "ReadStateStore" /* 6980 */;
import markUnreadDefault from "markUnread" /* 11180 */;
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
