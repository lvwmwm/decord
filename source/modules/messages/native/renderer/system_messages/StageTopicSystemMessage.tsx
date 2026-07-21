// Module ID: 7707
// Function ID: 61392
// Name: createStageTopicSystemMessage
// Dependencies: []
// Exports: createStageTopicSystemMessage

// Module 7707 (createStageTopicSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(dependencyMap[1]).t.ro3RM0, obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
