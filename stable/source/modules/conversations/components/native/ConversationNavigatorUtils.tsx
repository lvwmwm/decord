// Module ID: 8199
// Function ID: 8200
// Name: ConversationNavigatorUtils
// Dependencies: [4646, 4799, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8199 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4646 */;
import transitionToChannel from "transitionToChannel" /* 4799 */;
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
