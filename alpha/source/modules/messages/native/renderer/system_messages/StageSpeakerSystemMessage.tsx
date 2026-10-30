// Module ID: 8488
// Function ID: 8489
// Name: StageSpeakerSystemMessage
// Dependencies: [8410, 1114, 8412, 8414, 2]
// Exports: createStageSpeakerSystemMessage

// Module 8488 (StageSpeakerSystemMessage)
import intl2 from "intl" /* 1114 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8410 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8412 */;
import createCommonMessageDefault from "createCommonMessage" /* 8414 */;
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
