// Module ID: 9712
// Function ID: 9713
// Name: ConversationNavigatorUtils
// Dependencies: [5133, 5689, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9712 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5133 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5689);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, messageId) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const tmpResult = transitionToChannel;
  tmpResult.transitionToMessage(channelId, messageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
