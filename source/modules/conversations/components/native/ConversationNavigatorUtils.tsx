// Module ID: 8586
// Function ID: 8587
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4159, 4311, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8586 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4159) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4159) /* getRootNavigationRef */;
  const tmp = require;
  require(4311) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
