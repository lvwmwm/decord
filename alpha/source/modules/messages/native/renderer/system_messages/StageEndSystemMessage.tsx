// Module ID: 8452
// Function ID: 8453
// Name: StageEndSystemMessage
// Dependencies: [8373, 1125, 8375, 8377, 2]
// Exports: createStageEndSystemMessage

// Module 8452 (StageEndSystemMessage)
import intl2 from "intl" /* 1125 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8373 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8375 */;
import createCommonMessageDefault from "createCommonMessage" /* 8377 */;
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
