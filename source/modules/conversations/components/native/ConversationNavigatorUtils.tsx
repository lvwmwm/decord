// Module ID: 9293
// Function ID: 9294
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4045, 4201, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 9293 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4045) /* getRootNavigationRef */;
  const tmp = require;
  require(4201) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
