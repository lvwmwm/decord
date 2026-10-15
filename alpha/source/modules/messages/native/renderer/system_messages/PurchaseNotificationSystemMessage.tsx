// Module ID: 8270
// Function ID: 8271
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1998, 8271, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 8270 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1998 */;
import size from "module_2" /* 2 */;

let tmp2;
const GuildProductPurchaseSystemMessage = tmp2(8271);
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
