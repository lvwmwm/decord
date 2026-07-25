// Module ID: 7729
// Function ID: 61658
// Name: createChannelFollowAddSystemMessage
// Dependencies: [7684, 1212, 7686, 7687, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7729 (createChannelFollowAddSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7684) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7686)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content };
  const obj1 = { action: "bindGuildMenu", messageReference: message.messageReference, medium: true };
  obj.webhookNameOnClick = obj1;
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.xH8qGO, obj);
  const merged = Object.assign(importDefault(7687)(roleStyle));
  return obj;
};
