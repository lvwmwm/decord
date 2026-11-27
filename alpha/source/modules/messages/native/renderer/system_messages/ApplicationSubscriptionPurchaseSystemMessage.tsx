// Module ID: 14416
// Function ID: 14417
// Name: ApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [12008, 10612, 14379, 14380, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 14416 (ApplicationSubscriptionPurchaseSystemMessage)
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 10612 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import createCommonMessageDefault from "createCommonMessage" /* 14380 */;
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
