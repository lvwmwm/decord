// Module ID: 8660
// Function ID: 8661
// Name: ApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [8579, 8613, 8581, 8583, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 8660 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8579 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8581 */;
import createCommonMessageDefault from "createCommonMessage" /* 8583 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export function createApplicationSubscriptionPurchaseSystemMessage(message) {
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
}
