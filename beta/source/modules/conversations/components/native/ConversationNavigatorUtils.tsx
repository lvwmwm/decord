// Module ID: 8649
// Function ID: 8650
// Name: ConversationNavigatorUtils
// Dependencies: [5090, 5646, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8649 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5646);
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
