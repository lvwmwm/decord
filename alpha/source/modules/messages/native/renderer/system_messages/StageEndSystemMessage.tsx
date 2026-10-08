// Module ID: 8029
// Function ID: 8030
// Name: StageEndSystemMessage
// Dependencies: [7951, 1126, 7953, 7955, 2]
// Exports: createStageEndSystemMessage

// Module 8029 (StageEndSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7951 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7953 */;
import createCommonMessageDefault from "createCommonMessage" /* 7955 */;
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
