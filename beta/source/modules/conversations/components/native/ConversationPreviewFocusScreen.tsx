// Module ID: 16684
// Function ID: 16685
// Name: ConversationPreviewFocusScreen
// Dependencies: [19, 7014, 21, 1488, 504, 12824, 2]
// Exports: default

// Module 16684 (ConversationPreviewFocusScreen)
import Fragment from "Fragment" /* 21 */;
import ConversationFocusViewDefault from "ConversationFocusView" /* 12824 */;
import react from "react" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewFocusScreen.tsx");

export default function ConversationPreviewFocusScreen() {
  let channelId;
  let conversationId;
  let fullyHydrated;
  let isFullFetchPending;
  let messageId;
  let startMessageId;
  let obj = conversationId(1488);
  const params = obj.useRoute().params;
  conversationId = params.conversationId;
  ({ channelId, messageId } = params);
  const items = [ConversationPreviewStore];
  const items1 = [conversationId];
  const obj2 = conversationId(504);
  const messages = obj2.useStateFromStores(items, () => ConversationPreviewStore.getHydratedMessages(conversationId), items1);
  const items2 = [ConversationPreviewStore];
  const items3 = [conversationId];
  const obj3 = conversationId(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let startMessageId;
    const obj = { fullyHydrated: ConversationPreviewStore.isFullyHydrated(conversationId), isFullFetchPending: ConversationPreviewStore.isConversationFetchPending(conversationId, true), startMessageId };
    const conversation = ConversationPreviewStore.getConversation(conversationId);
    startMessageId = undefined;
    if (conversation != null) {
      startMessageId = conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    return obj;
  }, items3);
  ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
  return jsx(ConversationFocusViewDefault, { channelId, conversationId, jumpMessageId, messages, fullyHydrated, isFullFetchPending, startMessageId });
};
