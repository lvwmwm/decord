// Module ID: 14405
// Function ID: 14406
// Name: StageEndSystemMessage
// Dependencies: [12000, 1112, 14372, 14373, 2]
// Exports: createStageEndSystemMessage

// Module 14405 (StageEndSystemMessage)
import intl2 from "intl" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12000 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14372 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export function createStageEndSystemMessage(message) {
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
}
