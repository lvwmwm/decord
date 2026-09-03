// Module ID: 7951
// Function ID: 7952
// Name: createApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [7881, 7916, 7883, 7885, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 7951 (createApplicationSubscriptionPurchaseSystemMessage)
import set from "set" /* 2 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7881 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7883 */;
import createCommonMessageDefault from "createCommonMessage" /* 7885 */;
import getApplicationSubscriptionSystemMessageASTContent from "getApplicationSubscriptionSystemMessageASTContent" /* 7916 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = getApplicationSubscriptionSystemMessageASTContent.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
