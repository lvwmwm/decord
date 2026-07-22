// Module ID: 7706
// Function ID: 61410
// Name: createStageStartSystemMessage
// Dependencies: []
// Exports: createStageStartSystemMessage

// Module 7706 (createStageStartSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(require(dependencyMap[1]).t.aZtRW8, obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
