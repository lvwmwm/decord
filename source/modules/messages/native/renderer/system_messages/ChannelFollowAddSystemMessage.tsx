// Module ID: 7782
// Function ID: 61686
// Name: createChannelFollowAddSystemMessage
// Dependencies: [7738, 1212, 7740, 7741, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7782 (createChannelFollowAddSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content };
  const obj1 = { action: "bindGuildMenu", messageReference: message.messageReference, medium: true };
  obj.webhookNameOnClick = obj1;
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.xH8qGO, obj);
  const merged = Object.assign(importDefault(7741)(roleStyle));
  return obj;
};
