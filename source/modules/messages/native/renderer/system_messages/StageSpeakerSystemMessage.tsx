// Module ID: 7949
// Function ID: 7950
// Name: createStageSpeakerSystemMessage
// Dependencies: [7881, 1233, 7883, 7885, 2]
// Exports: createStageSpeakerSystemMessage

// Module 7949 (createStageSpeakerSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7881 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7883 */;
import createCommonMessageDefault from "createCommonMessage" /* 7885 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(getSystemLocale.t.V4uCm4, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
