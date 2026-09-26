// Module ID: 8314
// Function ID: 8315
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1978, 8315, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8314 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1978 */;
import GuildProductPurchaseSystemMessage from "GuildProductPurchaseSystemMessage" /* 8315 */;
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
