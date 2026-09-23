// Module ID: 8368
// Function ID: 8369
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1978, 8369, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8368 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1978 */;
import GuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage" /* 8369 */;
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
