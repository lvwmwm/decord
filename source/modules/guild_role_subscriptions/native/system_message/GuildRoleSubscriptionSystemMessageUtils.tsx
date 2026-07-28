// Module ID: 10994
// Function ID: 85252
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: [653, 5695, 7750, 4359, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 10994 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(5695);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(5695).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(5695);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(7750) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(7750) /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj["sticker_id"] = stickerId;
  importDefault(4359).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
