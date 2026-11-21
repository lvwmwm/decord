// Module ID: 8779
// Function ID: 8780
// Name: ApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [8698, 8732, 8700, 8702, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 8779 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8698 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8700 */;
import createCommonMessageDefault from "createCommonMessage" /* 8702 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8732 */;
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
