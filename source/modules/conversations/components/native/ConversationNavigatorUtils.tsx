// Module ID: 9260
// Function ID: 72407
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4017, 4173, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9260 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, startMessageId) {
  const rootNavigationRef = require(4017) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    rootNavigationRef.goBack();
  }
  const obj = require(4017) /* getRootNavigationRef */;
  require(4173) /* transitionToChannel */.transitionToMessage(channelId, startMessageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
