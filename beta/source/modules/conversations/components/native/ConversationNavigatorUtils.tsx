// Module ID: 8167
// Function ID: 8168
// Name: ConversationNavigatorUtils
// Dependencies: [4614, 4767, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8167 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import transitionToChannel from "transitionToChannel" /* 4767 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
