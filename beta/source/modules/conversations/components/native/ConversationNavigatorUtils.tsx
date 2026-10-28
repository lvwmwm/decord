// Module ID: 9786
// Function ID: 9787
// Name: ConversationNavigatorUtils
// Dependencies: [5183, 5739, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9786 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5183 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5739);
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
