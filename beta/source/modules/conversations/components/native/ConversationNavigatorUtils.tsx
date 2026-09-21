// Module ID: 8189
// Function ID: 8190
// Name: ConversationNavigatorUtils
// Dependencies: [4617, 4769, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8189 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import transitionToChannel from "transitionToChannel" /* 4769 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, messageId) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, messageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
