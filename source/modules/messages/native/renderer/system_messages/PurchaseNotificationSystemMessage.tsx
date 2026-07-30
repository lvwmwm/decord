// Module ID: 7802
// Function ID: 7803
// Name: createPurchaseNotificationSystemMessage
// Dependencies: [1906, 7803, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 7802 (createPurchaseNotificationSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require(1906) /* PermissionOverwriteType */.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require(7803) /* createGuildProductPurchaseSystemMessage */.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = require(7803) /* createGuildProductPurchaseSystemMessage */;
  }
  return guildProductPurchaseSystemMessage;
};
