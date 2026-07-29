// Module ID: 9284
// Function ID: 9285
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4041, 4197, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9284 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4041) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4041) /* getRootNavigationRef */;
  const tmp = require;
  require(4197) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
