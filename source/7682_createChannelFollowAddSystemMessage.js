// Module ID: 7682
// Function ID: 61329
// Name: createChannelFollowAddSystemMessage
// Dependencies: []
// Exports: createChannelFollowAddSystemMessage

// Module 7682 (createChannelFollowAddSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content };
  const obj1 = { linkedId: -7084892487951.127, sharedControl: -1332854248393827000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, flex: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012570313480810974, messageReference: message.messageReference };
  obj.webhookNameOnClick = obj1;
  obj.content = intl.formatToParts(require(dependencyMap[1]).t.xH8qGO, obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
