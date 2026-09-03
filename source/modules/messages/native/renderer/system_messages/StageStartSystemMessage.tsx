// Module ID: 7946
// Function ID: 7947
// Name: createStageStartSystemMessage
// Dependencies: [7881, 1233, 7883, 7885, 2]
// Exports: createStageStartSystemMessage

// Module 7946 (createStageStartSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7881 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7883 */;
import createCommonMessageDefault from "createCommonMessage" /* 7885 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj[0] = intl.formatToParts(getSystemLocale.t.aZtRW8, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
