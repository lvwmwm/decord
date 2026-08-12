// Module ID: 8178
// Function ID: 8179
// Name: createApplicationSubscriptionPurchaseSystemMessage
// Dependencies: [8110, 8143, 8112, 8113, 2]
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 8178 (createApplicationSubscriptionPurchaseSystemMessage)
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(8110) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8112)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = require(8143) /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(importDefault(8113)(roleStyle));
  return obj;
};
