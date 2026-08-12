// Module ID: 11286
// Function ID: 11287
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: [676, 6959, 8140, 4538, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 11286 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(6959);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(6959).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(6959);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(8140) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(8140) /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  importDefault(4538).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
