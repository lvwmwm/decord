// Module ID: 7706
// Function ID: 61387
// Name: createApplicationSubscriptionPurchaseSystemMessage
// Dependencies: []
// Exports: createApplicationSubscriptionPurchaseSystemMessage

// Module 7706 (createApplicationSubscriptionPurchaseSystemMessage)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(dependencyMap[0]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {};
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[2])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = require(dependencyMap[1]).getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(importDefault(dependencyMap[3])(roleStyle));
  return obj;
};
