// Module ID: 7687
// Function ID: 61363
// Name: createChannelFollowAddSystemMessage
// Dependencies: []
// Exports: createChannelFollowAddSystemMessage

// Module 7687 (createChannelFollowAddSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content };
  const obj1 = { <string:1642952674>: "<string:3958784257>", <string:2458931869>: "<string:3947954177>", <string:441707910>: "<string:1077828>", messageReference: message.messageReference };
  obj.webhookNameOnClick = obj1;
  obj.content = intl.formatToParts(require(dependencyMap[1]).t.xH8qGO, obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
