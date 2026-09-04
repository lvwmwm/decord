// Module ID: 7957
// Function ID: 7958
// Name: createStageEndSystemMessage
// Dependencies: [7891, 1233, 7893, 7895, 2]
// Exports: createStageEndSystemMessage

// Module 7957 (createStageEndSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7891 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7893 */;
import createCommonMessageDefault from "createCommonMessage" /* 7895 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj[0] = intl.formatToParts(getSystemLocale.t.vMJhvG, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
