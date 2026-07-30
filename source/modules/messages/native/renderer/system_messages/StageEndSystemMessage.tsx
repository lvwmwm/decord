// Module ID: 7805
// Function ID: 7806
// Name: createStageEndSystemMessage
// Dependencies: [7740, 1236, 7742, 7743, 2]
// Exports: createStageEndSystemMessage

// Module 7805 (createStageEndSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7740) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = importDefault(7742)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.vMJhvG, obj);
  const merged = Object.assign(importDefault(7743)(roleStyle));
  return obj;
};
