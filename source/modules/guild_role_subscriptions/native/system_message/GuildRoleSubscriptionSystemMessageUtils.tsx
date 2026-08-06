// Module ID: 11145
// Function ID: 11146
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: [676, 6838, 8022, 4479, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 11145 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(6838);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(6838).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(6838);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(8022) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(8022) /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj.sticker_id = stickerId;
  importDefault(4479).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
