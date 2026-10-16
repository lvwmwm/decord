// Module ID: 9351
// Function ID: 9352
// Name: ConversationNavigatorUtils
// Dependencies: [4977, 9333, 5103, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9351 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9333 */;
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
