// Module ID: 8060
// Function ID: 8061
// Name: createApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [7992, 8025, 7994, 7995, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 8060 (createApplicationSubscriptionPurchaseSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7992) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7994)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = require(8025) /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(importDefault(7995)(roleStyle));
  return obj;
};
