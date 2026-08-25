// Module ID: 8727
// Function ID: 8728
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4235, 4391, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8727 (closeConversationsAndJumpToMessage)
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4235 */;
import transitionToChannel from "transitionToChannel" /* 4391 */;

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
