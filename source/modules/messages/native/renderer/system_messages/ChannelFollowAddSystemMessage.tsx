// Module ID: 7788
// Function ID: 7789
// Name: createChannelFollowAddSystemMessage
// Dependencies: [7743, 1236, 7745, 7746, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7788 (createChannelFollowAddSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, webhookName: null, webhookNameOnClick: null };
  obj[1] = importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[3] = { action: "bindGuildMenu", messageReference: message.messageReference, medium: true };
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.xH8qGO, obj);
  const merged = Object.assign(importDefault(7746)(roleStyle));
  return obj;
};
