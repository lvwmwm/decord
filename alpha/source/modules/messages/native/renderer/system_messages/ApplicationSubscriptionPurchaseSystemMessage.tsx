// Module ID: 8277
// Function ID: 8278
// Name: ApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [8196, 8230, 8198, 8200, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 8277 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8196 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8198 */;
import createCommonMessageDefault from "createCommonMessage" /* 8200 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8230 */;
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
