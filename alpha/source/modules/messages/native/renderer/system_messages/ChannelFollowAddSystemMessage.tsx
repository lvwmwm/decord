// Module ID: 8465
// Function ID: 8466
// Name: ChannelFollowAddSystemMessage
// Dependencies: [8410, 1114, 8412, 8414, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 8465 (ChannelFollowAddSystemMessage)
import intl2 from "intl" /* 1114 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8410 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8412 */;
import createCommonMessageDefault from "createCommonMessage" /* 8414 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export function createChannelFollowAddSystemMessage(message) {
  let formatToParts;
  let obj3;
  let xH8qGO;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: formatToParts(xH8qGO, obj3) };
  const intl = intl2.intl;
  formatToParts = intl.formatToParts;
  obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), webhookName: message.content, webhookNameOnClick: { action: "bindGuildMenu", messageReference: message.messageReference, medium: true } };
  xH8qGO = intl2.t.xH8qGO;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
}
