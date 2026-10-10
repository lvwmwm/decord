// Module ID: 9355
// Function ID: 9356
// Name: ConversationNavigatorUtils
// Dependencies: [4977, 9337, 5103, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9355 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9337 */;
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
