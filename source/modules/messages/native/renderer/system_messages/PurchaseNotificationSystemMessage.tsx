// Module ID: 7703
// Function ID: 61384
// Name: createPurchaseNotificationSystemMessage
// Dependencies: [1348, 1838, 7635]
// Exports: createPurchaseNotificationSystemMessage

// Module 7703 (createPurchaseNotificationSystemMessage)
import result from "result";

result = result.fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (null != purchaseNotification) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require(dependencyMap[0]).PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require(dependencyMap[1]).createGuildProductPurchaseSystemMessage(message);
    const obj = require(dependencyMap[1]);
  }
  return guildProductPurchaseSystemMessage;
};
