// Module ID: 9275
// Function ID: 72480
// Name: closeConversationsAndJumpToMessage
// Dependencies: []
// Exports: closeConversationsAndJumpToMessage

// Module 9275 (closeConversationsAndJumpToMessage)
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
