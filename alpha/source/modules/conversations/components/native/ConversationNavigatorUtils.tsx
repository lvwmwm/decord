// Module ID: 8171
// Function ID: 8172
// Name: ConversationNavigatorUtils
// Dependencies: [4615, 8155, 4768, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8171 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4615 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 8155 */;
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
