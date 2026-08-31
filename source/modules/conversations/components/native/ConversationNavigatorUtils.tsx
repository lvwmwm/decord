// Module ID: 7800
// Function ID: 7801
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4303, 4459, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7800 (closeConversationsAndJumpToMessage)
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4303 */;
import transitionToChannel from "transitionToChannel" /* 4459 */;

const result = set.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = getRootNavigationRef;
  const tmp = require;
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
