// Module ID: 8028
// Function ID: 8029
// Name: StageStartSystemMessage
// Dependencies: [7951, 1126, 7953, 7955, 2]
// Exports: createStageStartSystemMessage

// Module 8028 (StageStartSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7951 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7953 */;
import createCommonMessageDefault from "createCommonMessage" /* 7955 */;
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
