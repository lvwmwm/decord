// Module ID: 10837
// Function ID: 10838
// Name: MessagePreviewReactions
// Dependencies: [19, 7014, 7018, 7808, 21, 504, 6583, 6603, 10826, 2]
// Exports: default

// Module 10837 (MessagePreviewReactions)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7014 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;
import MessagePreviewStore from "MessagePreviewStore" /* 7808 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_7 = [];
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  let channelId;
  let messageId;
  let tmp4Result;
  ({ channelId, messageId } = emoji);
  const tmp = channelId;
  emoji = emoji.emoji;
  const items = [MessagePreviewStore, ConversationsStore, ConversationPreviewStore];
  const items1 = [channelId, messageId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, tmp);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(tmp);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
  const tmp3 = messageId(6583);
  const obj2 = { value: tmp3(messageId(6603).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: tmp4Result };
  const AnalyticsLocationProvider = channelId(6583).AnalyticsLocationProvider;
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji, reactions: stateFromStores };
    tmp4Result = tmp4(tmp(10826).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(10826).MessageReactionsEmpty, {});
  }
  return jsx(AnalyticsLocationProvider, obj2);
};
