// Module ID: 8171
// Function ID: 8172
// Name: createPurchaseNotificationSystemMessage
// Dependencies: [1954, 8172, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8171 (createPurchaseNotificationSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === require(1954) /* PermissionOverwriteType */.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = require(8172) /* createGuildProductPurchaseSystemMessage */.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = require(8172) /* createGuildProductPurchaseSystemMessage */;
  }
  return guildProductPurchaseSystemMessage;
};
