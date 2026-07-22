// Module ID: 9280
// Function ID: 72516
// Name: closeConversationsAndJumpToMessage
// Dependencies: []
// Exports: closeConversationsAndJumpToMessage

// Module 9280 (closeConversationsAndJumpToMessage)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, startMessageId) {
  const rootNavigationRef = require(dependencyMap[0]).getRootNavigationRef();
  if (null != rootNavigationRef) {
    rootNavigationRef.goBack();
  }
  const obj = require(dependencyMap[0]);
  require(dependencyMap[1]).transitionToMessage(channelId, startMessageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
