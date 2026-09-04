// Module ID: 7937
// Function ID: 7938
// Name: createChannelFollowAddSystemMessage
// Dependencies: [7891, 1233, 7893, 7895, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7937 (createChannelFollowAddSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7891 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7893 */;
import createCommonMessageDefault from "createCommonMessage" /* 7895 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content, webhookNameOnClick: { action: "bindGuildMenu", messageReference: message.messageReference, medium: true } };
  obj[0] = intl.formatToParts(getSystemLocale.t.xH8qGO, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
