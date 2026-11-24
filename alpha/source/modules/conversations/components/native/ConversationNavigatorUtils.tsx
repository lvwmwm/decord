// Module ID: 8917
// Function ID: 8918
// Name: ConversationNavigatorUtils
// Dependencies: [5094, 6000, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8917 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5094 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(6000);
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
