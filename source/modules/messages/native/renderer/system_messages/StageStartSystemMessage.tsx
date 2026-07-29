// Module ID: 7807
// Function ID: 7808
// Name: createStageStartSystemMessage
// Dependencies: [7743, 1236, 7745, 7746, 2]
// Exports: createStageStartSystemMessage

// Module 7807 (createStageStartSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.aZtRW8, obj);
  const merged = Object.assign(importDefault(7746)(roleStyle));
  return obj;
};
