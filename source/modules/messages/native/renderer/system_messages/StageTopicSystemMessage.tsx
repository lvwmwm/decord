// Module ID: 7786
// Function ID: 61800
// Name: createStageTopicSystemMessage
// Dependencies: [7720, 1212, 7722, 7723, 2]
// Exports: createStageTopicSystemMessage

// Module 7786 (createStageTopicSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.ro3RM0, obj);
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};
