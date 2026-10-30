// Module ID: 9846
// Function ID: 9847
// Name: ConversationNavigatorUtils
// Dependencies: [5194, 5751, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9846 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5751);
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
