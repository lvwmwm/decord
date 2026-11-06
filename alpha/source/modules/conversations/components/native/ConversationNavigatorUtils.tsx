// Module ID: 10003
// Function ID: 10004
// Name: ConversationNavigatorUtils
// Dependencies: [5345, 5912, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 10003 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5345 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5912);
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
