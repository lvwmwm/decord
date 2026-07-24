// Module ID: 7801
// Function ID: 61733
// Name: createStageStartSystemMessage
// Dependencies: [7738, 1212, 7740, 7741, 2]
// Exports: createStageStartSystemMessage

// Module 7801 (createStageStartSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.aZtRW8, obj);
  const merged = Object.assign(importDefault(7741)(roleStyle));
  return obj;
};
