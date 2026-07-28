// Module ID: 7787
// Function ID: 61802
// Name: createStageSpeakerSystemMessage
// Dependencies: [7720, 1212, 7722, 7723, 2]
// Exports: createStageSpeakerSystemMessage

// Module 7787 (createStageSpeakerSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.V4uCm4, obj);
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};
