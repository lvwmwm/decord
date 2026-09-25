// Module ID: 7346
// Function ID: 7347
// Name: ConversationNavigatorUtils
// Dependencies: [4689, 7328, 4840, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7346 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import transitionToChannel from "transitionToChannel" /* 4840 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7328 */;
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
