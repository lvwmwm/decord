// Module ID: 7861
// Function ID: 7862
// Name: createChannelFollowAddSystemMessage
// Dependencies: [7816, 1236, 7818, 7819, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7861 (createChannelFollowAddSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7816 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7818 */;
import createCommonMessageDefault from "createCommonMessage" /* 7819 */;

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
