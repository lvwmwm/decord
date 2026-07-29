// Module ID: 7810
// Function ID: 7811
// Name: createStageSpeakerSystemMessage
// Dependencies: [7743, 1236, 7745, 7746, 2]
// Exports: createStageSpeakerSystemMessage

// Module 7810 (createStageSpeakerSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null };
  obj[1] = importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.V4uCm4, obj);
  const merged = Object.assign(importDefault(7746)(roleStyle));
  return obj;
};
