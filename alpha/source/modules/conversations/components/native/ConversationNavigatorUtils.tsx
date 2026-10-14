// Module ID: 9365
// Function ID: 9366
// Name: ConversationNavigatorUtils
// Dependencies: [4979, 9347, 5107, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9365 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4979 */;
import transitionToChannel from "transitionToChannel" /* 5107 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9347 */;
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
