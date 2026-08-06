// Module ID: 8503
// Function ID: 8504
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4136, 4293, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8503 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4136) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4136) /* getRootNavigationRef */;
  const tmp = require;
  require(4293) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
