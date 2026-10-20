// Module ID: 9682
// Function ID: 9683
// Name: ConversationNavigatorUtils
// Dependencies: [5112, 5669, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9682 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5112 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5669);
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
