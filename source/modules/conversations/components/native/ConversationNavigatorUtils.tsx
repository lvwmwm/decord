// Module ID: 9287
// Function ID: 72557
// Name: closeConversationsAndJumpToMessage
// Dependencies: [3982, 4138, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9287 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, startMessageId) {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    rootNavigationRef.goBack();
  }
  const obj = require(3982) /* getRootNavigationRef */;
  require(4138) /* transitionToChannel */.transitionToMessage(channelId, startMessageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
