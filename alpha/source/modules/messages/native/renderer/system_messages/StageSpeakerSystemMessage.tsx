// Module ID: 8397
// Function ID: 8398
// Name: StageSpeakerSystemMessage
// Dependencies: [8316, 1128, 8318, 8320, 2]
// Exports: createStageSpeakerSystemMessage

// Module 8397 (StageSpeakerSystemMessage)
import intl2 from "intl" /* 1128 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8316 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8318 */;
import createCommonMessageDefault from "createCommonMessage" /* 8320 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(message) {
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
};
