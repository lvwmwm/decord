// Module ID: 9820
// Function ID: 9821
// Name: ConversationNavigatorUtils
// Dependencies: [5188, 5745, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9820 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import size from "module_2" /* 2 */;

let tmp;
const transitionToChannel = tmp(5745);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export function closeConversationsAndJumpToMessage(channelId, messageId) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const tmpResult = transitionToChannel;
  tmpResult.transitionToMessage(channelId, messageId, { navigationReplace: true });
}
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
