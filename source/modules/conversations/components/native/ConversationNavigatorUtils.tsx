// Module ID: 8625
// Function ID: 8626
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4200, 4352, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8625 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4200) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4200) /* getRootNavigationRef */;
  const tmp = require;
  require(4352) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
