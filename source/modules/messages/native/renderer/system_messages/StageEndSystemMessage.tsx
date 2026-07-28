// Module ID: 7785
// Function ID: 61798
// Name: createStageEndSystemMessage
// Dependencies: [7720, 1212, 7722, 7723, 2]
// Exports: createStageEndSystemMessage

// Module 7785 (createStageEndSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.vMJhvG, obj);
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};
