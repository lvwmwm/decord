// Module ID: 7355
// Function ID: 7356
// Name: ConversationNavigatorUtils
// Dependencies: [4695, 7337, 4848, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7355 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import transitionToChannel from "transitionToChannel" /* 4848 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7337 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, messageId, conversationId) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const tmpResult = ConversationsActionCreators;
  const result = tmpResult.setSelectedConversation(channelId, conversationId, { shouldJump: false });
  const tmpResult2 = transitionToChannel;
  tmpResult2.transitionToMessage(channelId, messageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
