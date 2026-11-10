// Module ID: 10104
// Function ID: 10105
// Name: MessagePreviewReactions
// Dependencies: [19, 7767, 7770, 8930, 21, 504, 7326, 7351, 10094, 2]
// Exports: default

// Module 10104 (MessagePreviewReactions)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7767 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7770 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8930 */;
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
  const tmp3 = messageId(7326);
  const obj2 = { value: tmp3(messageId(7351).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: tmp4Result };
  const AnalyticsLocationProvider = channelId(7326).AnalyticsLocationProvider;
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji, reactions: stateFromStores };
    tmp4Result = tmp4(tmp(10094).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(10094).MessageReactionsEmpty, {});
  }
  return jsx(AnalyticsLocationProvider, obj2);
};
