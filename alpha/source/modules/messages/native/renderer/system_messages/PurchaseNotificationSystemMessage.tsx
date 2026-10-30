// Module ID: 8483
// Function ID: 8484
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1993, 8484, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8483 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1993 */;
import size from "module_2" /* 2 */;

let tmp2;
const GuildProductPurchaseSystemMessage = tmp2(8484);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx");

export function createPurchaseNotificationSystemMessage(message) {
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
}
