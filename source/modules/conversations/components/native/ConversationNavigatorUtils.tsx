// Module ID: 8362
// Function ID: 8363
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4107, 4263, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8362 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4107) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4107) /* getRootNavigationRef */;
  const tmp = require;
  require(4263) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
