// Module ID: 7789
// Function ID: 61807
// Name: createApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [7720, 7754, 7722, 7723, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 7789 (createApplicationSubscriptionPurchaseSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7720) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7722)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = require(7754) /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(importDefault(7723)(roleStyle));
  return obj;
};
