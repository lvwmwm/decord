// Module ID: 8272
// Function ID: 8273
// Name: StageStartSystemMessage
// Dependencies: [8196, 1126, 8198, 8200, 2]
// Exports: createStageStartSystemMessage

// Module 8272 (StageStartSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8196 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8198 */;
import createCommonMessageDefault from "createCommonMessage" /* 8200 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(message) {
  let aZtRW8;
  let formatToParts;
  let obj3;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: formatToParts(aZtRW8, obj3) };
  const intl = intl2.intl;
  formatToParts = intl.formatToParts;
  obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), topic: message.content };
  aZtRW8 = intl2.t.aZtRW8;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
