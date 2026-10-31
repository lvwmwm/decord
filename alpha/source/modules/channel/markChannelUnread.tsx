// Module ID: 10990
// Function ID: 10991
// Name: markChannelUnread
// Dependencies: [6842, 10991, 504, 2]
// Exports: default, useCanMarkChannelUnread

// Module 10990 (markChannelUnread)
import ReadStateStore2 from "ReadStateStore" /* 6842 */;
import markUnreadDefault from "markUnread" /* 10991 */;
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
