// Module ID: 7803
// Function ID: 61737
// Name: createStageTopicSystemMessage
// Dependencies: [7738, 1212, 7740, 7741, 2]
// Exports: createStageTopicSystemMessage

// Module 7803 (createStageTopicSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.ro3RM0, obj);
  const merged = Object.assign(importDefault(7741)(roleStyle));
  return obj;
};
