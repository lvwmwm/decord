// Module ID: 8252
// Function ID: 8253
// Name: ChannelFollowAddSystemMessage
// Dependencies: [8196, 1126, 8198, 8200, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 8252 (ChannelFollowAddSystemMessage)
import intl2 from "intl" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8196 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8198 */;
import createCommonMessageDefault from "createCommonMessage" /* 8200 */;
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
