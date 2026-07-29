// Module ID: 11018
// Function ID: 11019
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: [676, 5713, 7773, 4384, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 11018 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(5713);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(5713).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(5713);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(7773) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(7773) /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  importDefault(4384).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
