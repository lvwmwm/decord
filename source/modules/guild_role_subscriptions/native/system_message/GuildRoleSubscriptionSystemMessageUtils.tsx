// Module ID: 10955
// Function ID: 85124
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: [653, 5685, 7714, 4325, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 10955 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
import { AnalyticEvents } from "ME";

const result = require("identityHook").fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(5685);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(5685).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(5685);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(7714) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(7714) /* identityHook */;
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj["sticker_id"] = stickerId;
  importDefault(4325).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
