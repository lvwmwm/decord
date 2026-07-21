// Module ID: 10962
// Function ID: 85257
// Name: handleRoleSubscriptionPurchaseSystemMessageCtaClicked
// Dependencies: []
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 10962 (handleRoleSubscriptionPurchaseSystemMessageCtaClicked)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(dependencyMap[1]);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(dependencyMap[1]).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(dependencyMap[1]);
  const roleSubscriptionPurchaseSystemMessageEventProperties = require(dependencyMap[2]).getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = require(dependencyMap[2]);
  obj = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj["sticker_id"] = stickerId;
  importDefault(dependencyMap[3]).trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj);
};
