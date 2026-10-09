// Module ID: 9328
// Function ID: 9329
// Name: ConversationNavigatorUtils
// Dependencies: [4938, 9310, 5102, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9328 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import transitionToChannel from "transitionToChannel" /* 5102 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9310 */;
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
