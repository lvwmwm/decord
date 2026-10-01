// Module ID: 12823
// Function ID: 12824
// Name: ConversationFocusScreen
// Dependencies: [19, 7018, 21, 1488, 504, 12824, 2]
// Exports: default

// Module 12823 (ConversationFocusScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let channelId;
  let fullyHydrated;
  let isFullFetchPending;
  let startMessageId;
  let obj = channelId(1488);
  const params = obj.useRoute().params;
  channelId = params.channelId;
  const conversationId = params.conversationId;
  let obj2 = channelId(504);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const messages = obj2.useStateFromStores(items, () => ConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  const items2 = [ConversationsStore];
  const items3 = [channelId, conversationId];
  const obj3 = channelId(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let startMessageId;
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
    let flag;
    const obj = ConversationsStore;
    const tmp = conversationId;
    if (conversationMetadata != null) {
      flag = conversationMetadata.fullyHydrated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { fullyHydrated: flag, isFullFetchPending: obj.isConversationFetchPending(tmp, true), startMessageId };
    startMessageId = undefined;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    return obj2;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(conversationId(12824), { channelId, conversationId, messages, fullyHydrated, isFullFetchPending, startMessageId });
};
