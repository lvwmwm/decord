// Module ID: 7782
// Function ID: 61792
// Name: createPurchaseNotificationSystemMessage
// Dependencies: [1882, 7783, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 7782 (createPurchaseNotificationSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (null != purchaseNotification) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require(1882) /* PermissionOverwriteType */.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require(7783) /* createGuildProductPurchaseSystemMessage */.createGuildProductPurchaseSystemMessage(message);
    const obj = require(7783) /* createGuildProductPurchaseSystemMessage */;
  }
  return guildProductPurchaseSystemMessage;
};
