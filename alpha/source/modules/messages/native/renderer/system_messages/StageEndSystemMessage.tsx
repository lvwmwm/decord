// Module ID: 8273
// Function ID: 8274
// Name: StageEndSystemMessage
// Dependencies: [8196, 1126, 8198, 8200, 2]
// Exports: createStageEndSystemMessage

// Module 8273 (StageEndSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8196 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8198 */;
import createCommonMessageDefault from "createCommonMessage" /* 8200 */;
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
