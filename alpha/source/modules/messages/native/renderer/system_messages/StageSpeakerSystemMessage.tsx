// Module ID: 8637
// Function ID: 8638
// Name: StageSpeakerSystemMessage
// Dependencies: [8559, 1113, 8561, 8563, 2]
// Exports: createStageSpeakerSystemMessage

// Module 8637 (StageSpeakerSystemMessage)
import intl2 from "intl" /* 1113 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8559 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8561 */;
import createCommonMessageDefault from "createCommonMessage" /* 8563 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export function createStageSpeakerSystemMessage(message) {
  let V4uCm4;
  let formatToParts;
  let obj3;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: formatToParts(V4uCm4, obj3) };
  const intl = intl2.intl;
  formatToParts = intl.formatToParts;
  obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  V4uCm4 = intl2.t.V4uCm4;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
}
