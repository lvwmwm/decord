// Module ID: 8529
// Function ID: 8530
// Name: ConversationNavigatorUtils
// Dependencies: [4971, 5527, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8529 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4971 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5527);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export function closeConversationsAndJumpToMessage(channelId, id2) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const tmpResult = transitionToChannel;
  tmpResult.transitionToMessage(channelId, id2, { navigationReplace: true });
}
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
