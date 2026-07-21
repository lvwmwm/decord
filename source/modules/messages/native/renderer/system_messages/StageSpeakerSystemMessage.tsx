// Module ID: 7708
// Function ID: 61394
// Name: createStageSpeakerSystemMessage
// Dependencies: []
// Exports: createStageSpeakerSystemMessage

// Module 7708 (createStageSpeakerSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(require(dependencyMap[1]).t.V4uCm4, obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
