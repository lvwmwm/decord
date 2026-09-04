// Module ID: 10175
// Function ID: 10176
// Name: markChannelUnread
// Dependencies: [4496, 10176, 586, 2]
// Exports: default, useCanMarkChannelUnread

// Module 10175 (markChannelUnread)
import _markUnreadDefault from "_markUnread" /* 10176 */;
import closure_3 from "generateOldThreadCutoff" /* 4496 */;
import { ReadState } from "generateOldThreadCutoff" /* 4496 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    _markUnreadDefault(arg0, lastMessageId);
  }
};
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  const _require = channel;
  const items = [closure_3];
  return _require(586).useStateFromStores(items, () => closure_1_3.canBeUnread(id.id) && closure_1_3.hasLastMessage(id.id) && !id.isCategory());
};
