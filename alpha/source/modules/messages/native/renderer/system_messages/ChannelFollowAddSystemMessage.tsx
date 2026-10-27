// Module ID: 8375
// Function ID: 8376
// Name: ChannelFollowAddSystemMessage
// Dependencies: [8317, 1125, 8319, 8321, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 8375 (ChannelFollowAddSystemMessage)
import intl2 from "intl" /* 1125 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8317 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8319 */;
import createCommonMessageDefault from "createCommonMessage" /* 8321 */;
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
