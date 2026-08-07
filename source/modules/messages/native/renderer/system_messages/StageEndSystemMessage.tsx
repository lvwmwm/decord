// Module ID: 8073
// Function ID: 8074
// Name: createStageEndSystemMessage
// Dependencies: [8009, 1236, 8011, 8012, 2]
// Exports: createStageEndSystemMessage

// Module 8073 (createStageEndSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8009) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = importDefault(8011)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.vMJhvG, obj);
  const merged = Object.assign(importDefault(8012)(roleStyle));
  return obj;
};
