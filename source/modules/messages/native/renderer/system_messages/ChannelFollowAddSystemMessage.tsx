// Module ID: 8053
// Function ID: 8054
// Name: createChannelFollowAddSystemMessage
// Dependencies: [8009, 1236, 8011, 8012, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 8053 (createChannelFollowAddSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8009) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, webhookName: null, webhookNameOnClick: null };
  obj[1] = importDefault(8011)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[3] = { action: "bindGuildMenu", messageReference: message.messageReference, medium: true };
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.xH8qGO, obj);
  const merged = Object.assign(importDefault(8012)(roleStyle));
  return obj;
};
