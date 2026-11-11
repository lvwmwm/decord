// Module ID: 9202
// Function ID: 9203
// Name: StageTopicSystemMessage
// Dependencies: [9122, 1113, 9124, 9126, 2]
// Exports: createStageTopicSystemMessage

// Module 9202 (StageTopicSystemMessage)
import intl2 from "intl" /* 1113 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9122 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9124 */;
import createCommonMessageDefault from "createCommonMessage" /* 9126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export function createStageTopicSystemMessage(message) {
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
}
