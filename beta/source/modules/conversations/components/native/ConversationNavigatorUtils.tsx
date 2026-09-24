// Module ID: 8221
// Function ID: 8222
// Name: ConversationNavigatorUtils
// Dependencies: [4649, 4801, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8221 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import transitionToChannel from "transitionToChannel" /* 4801 */;
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
