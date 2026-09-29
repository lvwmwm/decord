// Module ID: 10543
// Function ID: 10544
// Name: markChannelUnread
// Dependencies: [4803, 10544, 504, 2]
// Exports: default, useCanMarkChannelUnread

// Module 10543 (markChannelUnread)
import markUnreadDefault from "markUnread" /* 10544 */;
import ReadStateStore from "ReadStateStore" /* 4803 */;

const require = globalThis.__r;

const require = fn;
const ReadState = fn(4803).ReadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
};
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  _require = channel;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStores(items, () => ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory());
};
