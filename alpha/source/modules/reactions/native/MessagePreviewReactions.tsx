// Module ID: 11078
// Function ID: 11079
// Name: MessagePreviewReactions
// Dependencies: [19, 8756, 8759, 10671, 21, 504, 7928, 7947, 11063, 2]
// Exports: default

// Module 11078 (MessagePreviewReactions)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 8756 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 8759 */;
import MessagePreviewStore from "MessagePreviewStore" /* 10671 */;
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
  const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [channelId, messageId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ChannelConversationsStore.getMessage(channelId, tmp);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(tmp);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
  const tmp3 = messageId(7928);
  const obj2 = { value: tmp3(messageId(7947).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: tmp4Result };
  const AnalyticsLocationProvider = channelId(7928).AnalyticsLocationProvider;
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji, reactions: stateFromStores };
    tmp4Result = tmp4(tmp(11063).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11063).MessageReactionsEmpty, {});
  }
  return jsx(AnalyticsLocationProvider, obj2);
};
