// Module ID: 8520
// Function ID: 8521
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4153, 4310, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8520 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4153) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4153) /* getRootNavigationRef */;
  const tmp = require;
  require(4310) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
