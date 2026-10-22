// Module ID: 9731
// Function ID: 9732
// Name: ConversationNavigatorUtils
// Dependencies: [5137, 5693, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9731 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5137 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5693);
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
