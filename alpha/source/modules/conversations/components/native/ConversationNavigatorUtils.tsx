// Module ID: 8253
// Function ID: 8254
// Name: ConversationNavigatorUtils
// Dependencies: [4685, 8237, 4838, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8253 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4685 */;
import transitionToChannel from "transitionToChannel" /* 4838 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 8237 */;
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
