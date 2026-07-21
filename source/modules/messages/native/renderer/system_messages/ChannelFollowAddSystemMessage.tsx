// Module ID: 7686
// Function ID: 61341
// Name: createChannelFollowAddSystemMessage
// Dependencies: []
// Exports: createChannelFollowAddSystemMessage

// Module 7686 (createChannelFollowAddSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content, webhookNameOnClick: { messageReference: message.messageReference } };
  obj.content = intl.formatToParts(require(dependencyMap[1]).t.xH8qGO, obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
