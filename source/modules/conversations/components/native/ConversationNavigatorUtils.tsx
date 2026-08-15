// Module ID: 12688
// Function ID: 12689
// Name: closeConversationsAndJumpToMessage
// Dependencies: [4230, 4768, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 12688 (closeConversationsAndJumpToMessage)
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require(4230) /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require(4230) /* getRootNavigationRef */;
  const tmp = require;
  require(4768) /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
