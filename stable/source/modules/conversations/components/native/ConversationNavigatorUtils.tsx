// Module ID: 10020
// Function ID: 10021
// Name: ConversationNavigatorUtils
// Dependencies: [5347, 5917, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 10020 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5347 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5917);
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
