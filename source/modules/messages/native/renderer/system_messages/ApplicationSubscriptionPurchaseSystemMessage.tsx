// Module ID: 7809
// Function ID: 7810
// Name: createApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [7740, 7774, 7742, 7743, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 7809 (createApplicationSubscriptionPurchaseSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7740) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7742)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = require(7774) /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(importDefault(7743)(roleStyle));
  return obj;
};
