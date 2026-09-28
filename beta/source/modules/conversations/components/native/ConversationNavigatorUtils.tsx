// Module ID: 7351
// Function ID: 7352
// Name: ConversationNavigatorUtils
// Dependencies: [4693, 7333, 4847, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7351 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7333 */;
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
