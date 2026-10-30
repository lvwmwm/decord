// Module ID: 9868
// Function ID: 9869
// Name: ConversationFocusScreen
// Dependencies: [19, 9829, 21, 1501, 504, 9869, 2]
// Exports: default

// Module 9868 (ConversationFocusScreen)
import Fragment from "Fragment" /* 21 */;
import ConversationFocusViewDefault from "ConversationFocusView" /* 9869 */;
import react from "react" /* 19 */;
import SelectedConversationStore from "SelectedConversationStore" /* 9829 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let channelId;
  let conversationId;
  let fullyHydrated;
  let isFullFetchPending;
  let messageId;
  let startMessageId;
  let obj = channelId(1501);
  const params = obj.useRoute().params;
  channelId = params.channelId;
  ({ conversationId, messageId } = params);
  const items = [SelectedConversationStore];
  const items1 = [channelId];
  const obj2 = channelId(504);
  const messages = obj2.useStateFromStores(items, () => SelectedConversationStore.getHydratedMessages(channelId), items1);
  const items2 = [SelectedConversationStore];
  const items3 = [channelId];
  const obj3 = channelId(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let startMessageId;
    const obj = { fullyHydrated: SelectedConversationStore.isFullyHydrated(channelId), isFullFetchPending: SelectedConversationStore.isConversationFetchPending(channelId, true), startMessageId };
    const conversation = SelectedConversationStore.getConversation(channelId);
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
