// Module ID: 8034
// Function ID: 8035
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1998, 8035, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8034 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1998 */;
import size from "module_2" /* 2 */;

let tmp2;
const GuildProductPurchaseSystemMessage = tmp2(8035);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export const createPurchaseNotificationSystemMessage = function createPurchaseNotificationSystemMessage(message) {
  const purchaseNotification = message.message.purchaseNotification;
  let type;
  if (purchaseNotification != null) {
    type = purchaseNotification.type;
  }
  let guildProductPurchaseSystemMessage = null;
  if (type === Server.PurchaseNotificationType.GUILD_PRODUCT) {
    const tmp2Result = GuildProductPurchaseSystemMessage;
    guildProductPurchaseSystemMessage = tmp2Result.createGuildProductPurchaseSystemMessage(message);
  }
  return guildProductPurchaseSystemMessage;
};
