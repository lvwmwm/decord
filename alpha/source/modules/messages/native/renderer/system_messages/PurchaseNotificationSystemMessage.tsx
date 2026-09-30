// Module ID: 7662
// Function ID: 7663
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1979, 7663, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 7662 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1979 */;
import GuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage" /* 7663 */;
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
