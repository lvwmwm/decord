// Module ID: 8053
// Function ID: 8054
// Name: createPurchaseNotificationSystemMessage
// Dependencies: [1935, 8054, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8053 (createPurchaseNotificationSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require(1935) /* PermissionOverwriteType */.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require(8054) /* createGuildProductPurchaseSystemMessage */.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = require(8054) /* createGuildProductPurchaseSystemMessage */;
  }
  return guildProductPurchaseSystemMessage;
};
