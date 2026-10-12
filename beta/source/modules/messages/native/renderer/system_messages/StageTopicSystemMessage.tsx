// Module ID: 8057
// Function ID: 8058
// Name: StageTopicSystemMessage
// Dependencies: [7979, 1126, 7981, 7983, 2]
// Exports: createStageTopicSystemMessage

// Module 8057 (StageTopicSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7979 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7981 */;
import createCommonMessageDefault from "createCommonMessage" /* 7983 */;
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
