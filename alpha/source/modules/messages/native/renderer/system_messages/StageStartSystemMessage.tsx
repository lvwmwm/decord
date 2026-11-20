// Module ID: 8654
// Function ID: 8655
// Name: StageStartSystemMessage
// Dependencies: [8578, 1112, 8580, 8582, 2]
// Exports: createStageStartSystemMessage

// Module 8654 (StageStartSystemMessage)
import intl2 from "intl" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8578 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8580 */;
import createCommonMessageDefault from "createCommonMessage" /* 8582 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export function createStageStartSystemMessage(message) {
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
}
