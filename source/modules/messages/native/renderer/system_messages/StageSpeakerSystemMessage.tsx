// Module ID: 7751
// Function ID: 61712
// Name: createStageSpeakerSystemMessage
// Dependencies: [7684, 1212, 7686, 7687, 2]
// Exports: createStageSpeakerSystemMessage

// Module 7751 (createStageSpeakerSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7684) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7686)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.V4uCm4, obj);
  const merged = Object.assign(importDefault(7687)(roleStyle));
  return obj;
};
