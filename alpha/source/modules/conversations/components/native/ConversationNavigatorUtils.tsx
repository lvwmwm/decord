// Module ID: 7546
// Function ID: 7547
// Name: ConversationNavigatorUtils
// Dependencies: [4723, 7528, 4877, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7546 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4723 */;
import transitionToChannel from "transitionToChannel" /* 4877 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7528 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, messageId, conversationId) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const result = ConversationsActionCreators.setSelectedConversation(channelId, conversationId, { shouldJump: false });
  const tmpResult = ConversationsActionCreators;
  transitionToChannel.transitionToMessage(channelId, messageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
