// Module ID: 11000
// Function ID: 85508
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: [653, 6691, 7768, 4324, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 11000 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(6691);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(6691).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(6691);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(7768) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(7768) /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj["sticker_id"] = stickerId;
  importDefault(4324).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
