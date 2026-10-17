// Module ID: 9655
// Function ID: 9656
// Name: ConversationNavigatorUtils
// Dependencies: [5073, 5202, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9655 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5202);
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
