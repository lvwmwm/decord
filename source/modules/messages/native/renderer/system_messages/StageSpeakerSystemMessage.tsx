// Module ID: 8058
// Function ID: 8059
// Name: createStageSpeakerSystemMessage
// Dependencies: [7992, 1236, 7994, 7995, 2]
// Exports: createStageSpeakerSystemMessage

// Module 8058 (createStageSpeakerSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7992) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null };
  obj[1] = importDefault(7994)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[0] = intl.formatToParts(require(1236) /* getSystemLocale */.t.V4uCm4, obj);
  const merged = Object.assign(importDefault(7995)(roleStyle));
  return obj;
};
