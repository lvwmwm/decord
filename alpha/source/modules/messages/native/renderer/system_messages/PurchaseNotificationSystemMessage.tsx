// Module ID: 7467
// Function ID: 7468
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1979, 7468, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 7467 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1979 */;
import GuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage" /* 7468 */;
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
