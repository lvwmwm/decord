// Module ID: 7785
// Function ID: 7786
// Name: createChannelFollowAddSystemMessage
// Dependencies: [7740, 1236, 7742, 7743, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7785 (createChannelFollowAddSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7740) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, webhookName: null, webhookNameOnClick: null };
  obj[1] = importDefault(7742)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[3] = { action: "bindGuildMenu", messageReference: message.messageReference, medium: true };
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.xH8qGO, obj);
  const merged = Object.assign(importDefault(7743)(roleStyle));
  return obj;
};
