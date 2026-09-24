// Module ID: 8372
// Function ID: 8373
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1978, 8373, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8372 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1978 */;
import GuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage" /* 8373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === Server.PurchaseNotificationType.GUILD_PRODUCT) {
    guildProductPurchaseSystemMessage = GuildProductPurchaseSystemMessage.createGuildProductPurchaseSystemMessage(message);
    const tmp2Result = GuildProductPurchaseSystemMessage;
  }
  return guildProductPurchaseSystemMessage;
};
