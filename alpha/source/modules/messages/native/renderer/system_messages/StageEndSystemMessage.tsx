// Module ID: 8396
// Function ID: 8397
// Name: StageEndSystemMessage
// Dependencies: [8317, 1125, 8319, 8321, 2]
// Exports: createStageEndSystemMessage

// Module 8396 (StageEndSystemMessage)
import intl2 from "intl" /* 1125 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8317 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8319 */;
import createCommonMessageDefault from "createCommonMessage" /* 8321 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(message) {
  let formatToParts;
  let obj3;
  let vMJhvG;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: formatToParts(vMJhvG, obj3) };
  const intl = intl2.intl;
  formatToParts = intl.formatToParts;
  obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), topic: message.content };
  vMJhvG = intl2.t.vMJhvG;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
