// Module ID: 11404
// Function ID: 11405
// Name: MessagePreviewReactions
// Dependencies: [19, 7698, 8478, 21, 504, 7265, 7285, 11393, 2]
// Exports: default

// Module 11404 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7698 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8478 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ConversationsStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, messageId);
    }
    return null != message ? message.reactions : closure_6;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(7265)(messageId(7285).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11393).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11393).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7265).AnalyticsLocationProvider, { value: messageId(7265)(messageId(7285).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
