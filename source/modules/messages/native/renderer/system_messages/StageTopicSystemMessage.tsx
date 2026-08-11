// Module ID: 8136
// Function ID: 8137
// Name: createStageTopicSystemMessage
// Dependencies: [8071, 1236, 8073, 8074, 2]
// Exports: createStageTopicSystemMessage

// Module 8136 (createStageTopicSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8071) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = importDefault(8073)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.ro3RM0, obj);
  const merged = Object.assign(importDefault(8074)(roleStyle));
  return obj;
};
