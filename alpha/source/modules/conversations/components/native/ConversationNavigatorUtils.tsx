// Module ID: 9576
// Function ID: 9577
// Name: ConversationNavigatorUtils
// Dependencies: [5033, 9558, 5162, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9576 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5033 */;
import transitionToChannel from "transitionToChannel" /* 5162 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 9558 */;
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
