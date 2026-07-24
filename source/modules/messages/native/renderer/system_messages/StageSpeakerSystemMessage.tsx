// Module ID: 7804
// Function ID: 61739
// Name: createStageSpeakerSystemMessage
// Dependencies: [7738, 1212, 7740, 7741, 2]
// Exports: createStageSpeakerSystemMessage

// Module 7804 (createStageSpeakerSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.V4uCm4, obj);
  const merged = Object.assign(importDefault(7741)(roleStyle));
  return obj;
};
