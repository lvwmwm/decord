// Module ID: 8035
// Function ID: 8036
// Name: ChannelFollowAddSystemMessage
// Dependencies: [7979, 1126, 7981, 7983, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 8035 (ChannelFollowAddSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7979 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7981 */;
import createCommonMessageDefault from "createCommonMessage" /* 7983 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(message) {
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
};
