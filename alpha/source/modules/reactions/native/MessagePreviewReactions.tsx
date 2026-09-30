// Module ID: 11042
// Function ID: 11043
// Name: MessagePreviewReactions
// Dependencies: [19, 7209, 7214, 8003, 21, 504, 6779, 6799, 11031, 2]
// Exports: default

// Module 11042 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7209 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7214 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8003 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ChannelConversationsStore.getMessage(channelId, tmp);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(tmp);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(6779)(messageId(6799).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11031).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11031).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(6779).AnalyticsLocationProvider, { value: messageId(6779)(messageId(6799).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
