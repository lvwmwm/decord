// Module ID: 9058
// Function ID: 9059
// Name: ConversationNavigatorUtils
// Dependencies: [5220, 6126, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9058 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(6126);
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
