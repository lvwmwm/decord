// Module ID: 11562
// Function ID: 11563
// Name: MessagePreviewReactions
// Dependencies: [19, 7868, 7872, 8663, 21, 504, 7439, 7459, 11551, 2]
// Exports: default

// Module 11562 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7868 */;
import ConversationsStore from "ConversationsStore" /* 7872 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8663 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ConversationsStore, ConversationPreviewStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, tmp);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(tmp);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(7439)(messageId(7459).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11551).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11551).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7439).AnalyticsLocationProvider, { value: messageId(7439)(messageId(7459).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
