// Module ID: 8629
// Function ID: 8630
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4198, 4353, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8629 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4198) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4198) /* getRootNavigationRef */;
  const tmp = require;
  require(4353) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
