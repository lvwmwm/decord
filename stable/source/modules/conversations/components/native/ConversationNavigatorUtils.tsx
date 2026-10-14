// Module ID: 7568
// Function ID: 7569
// Name: ConversationNavigatorUtils
// Dependencies: [4737, 7550, 4901, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7568 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7550 */;
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
