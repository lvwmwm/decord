// Module ID: 8390
// Function ID: 8391
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4137, 4293, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8390 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4137) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4137) /* getRootNavigationRef */;
  const tmp = require;
  require(4293) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
