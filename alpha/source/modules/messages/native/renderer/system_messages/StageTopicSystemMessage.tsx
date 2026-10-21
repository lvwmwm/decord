// Module ID: 8374
// Function ID: 8375
// Name: StageTopicSystemMessage
// Dependencies: [8294, 1128, 8296, 8298, 2]
// Exports: createStageTopicSystemMessage

// Module 8374 (StageTopicSystemMessage)
import intl2 from "intl" /* 1128 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8294 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8296 */;
import createCommonMessageDefault from "createCommonMessage" /* 8298 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(message) {
  let formatToParts;
  let obj3;
  let ro3RM0;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: formatToParts(ro3RM0, obj3) };
  const intl = intl2.intl;
  formatToParts = intl.formatToParts;
  obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), topic: message.content };
  ro3RM0 = intl2.t.ro3RM0;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
