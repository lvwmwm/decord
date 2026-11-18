// Module ID: 8561
// Function ID: 8562
// Name: ConversationNavigatorUtils
// Dependencies: [5000, 5556, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8561 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5000 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5556);
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
