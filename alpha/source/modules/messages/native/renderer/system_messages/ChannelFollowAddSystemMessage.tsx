// Module ID: 7644
// Function ID: 7645
// Name: ChannelFollowAddSystemMessage
// Dependencies: [7597, 1115, 7599, 7601, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 7644 (ChannelFollowAddSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7597 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7599 */;
import createCommonMessageDefault from "createCommonMessage" /* 7601 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.xH8qGO, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content, webhookNameOnClick: { action: "bindGuildMenu", messageReference: message.messageReference, medium: true } });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};
