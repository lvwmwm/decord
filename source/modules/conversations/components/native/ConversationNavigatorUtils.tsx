// Module ID: 9216
// Function ID: 72256
// Name: closeConversationsAndJumpToMessage
// Dependencies: [3983, 4139, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9216 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, startMessageId) {
  const rootNavigationRef = require(3983) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    rootNavigationRef.goBack();
  }
  const obj = require(3983) /* getRootNavigationRef */;
  require(4139) /* transitionToChannel */.transitionToMessage(channelId, startMessageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
