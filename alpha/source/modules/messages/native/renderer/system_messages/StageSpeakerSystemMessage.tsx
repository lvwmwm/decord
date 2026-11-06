// Module ID: 8588
// Function ID: 8589
// Name: StageSpeakerSystemMessage
// Dependencies: [8510, 1113, 8512, 8514, 2]
// Exports: createStageSpeakerSystemMessage

// Module 8588 (StageSpeakerSystemMessage)
import intl2 from "intl" /* 1113 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8510 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8512 */;
import createCommonMessageDefault from "createCommonMessage" /* 8514 */;
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
