// Module ID: 8321
// Function ID: 8322
// Name: StageStartSystemMessage
// Dependencies: [8255, 1119, 8257, 8259, 2]
// Exports: createStageStartSystemMessage

// Module 8321 (StageStartSystemMessage)
import util from "util" /* 1119 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8255 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8257 */;
import createCommonMessageDefault from "createCommonMessage" /* 8259 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.aZtRW8, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};
