// Module ID: 7712
// Function ID: 7713
// Name: ApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [7630, 7665, 7632, 7634, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 7712 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import createCommonMessageDefault from "createCommonMessage" /* 7634 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 7665 */;
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
