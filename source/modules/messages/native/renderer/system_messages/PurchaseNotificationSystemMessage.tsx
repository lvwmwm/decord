// Module ID: 7799
// Function ID: 61729
// Name: createPurchaseNotificationSystemMessage
// Dependencies: [1881, 7800, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 7799 (createPurchaseNotificationSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (null != purchaseNotification) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require(1881) /* PermissionOverwriteType */.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require(7800) /* createGuildProductPurchaseSystemMessage */.createGuildProductPurchaseSystemMessage(message);
    const obj = require(7800) /* createGuildProductPurchaseSystemMessage */;
  }
  return guildProductPurchaseSystemMessage;
};
