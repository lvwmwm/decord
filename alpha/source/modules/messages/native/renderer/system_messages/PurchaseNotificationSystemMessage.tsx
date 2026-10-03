// Module ID: 7694
// Function ID: 7695
// Name: PurchaseNotificationSystemMessage
// Dependencies: [1985, 7695, 2]
// Exports: createPurchaseNotificationSystemMessage

// Module 7694 (PurchaseNotificationSystemMessage)
import Server from "Server" /* 1985 */;
import size from "module_2" /* 2 */;

let tmp2;
const GuildProductPurchaseSystemMessage = tmp2(7695);
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
