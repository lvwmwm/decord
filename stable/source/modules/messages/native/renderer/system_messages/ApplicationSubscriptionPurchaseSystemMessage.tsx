// Module ID: 8329
// Function ID: 8330
// Name: ApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [8246, 8280, 8248, 8250, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 8329 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8246 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8248 */;
import createCommonMessageDefault from "createCommonMessage" /* 8250 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8280 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(message) {
  let getApplicationSubscriptionSystemMessageASTContent;
  let obj3;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: getApplicationSubscriptionSystemMessageASTContent(obj3) };
  getApplicationSubscriptionSystemMessageASTContent = ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent;
  obj3 = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
