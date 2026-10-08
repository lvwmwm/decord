// Module ID: 9290
// Function ID: 9291
// Name: ConversationNavigatorUtils
// Dependencies: [4937, 9272, 5101, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9290 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import transitionToChannel from "transitionToChannel" /* 5101 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9272 */;
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
