// Module ID: 7784
// Function ID: 61796
// Name: createStageStartSystemMessage
// Dependencies: [7720, 1212, 7722, 7723, 2]
// Exports: createStageStartSystemMessage

// Module 7784 (createStageStartSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.aZtRW8, obj);
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};
