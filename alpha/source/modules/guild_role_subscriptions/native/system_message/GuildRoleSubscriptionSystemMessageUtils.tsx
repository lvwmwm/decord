// Module ID: 12448
// Function ID: 12449
// Name: system_message/GuildRoleSubscriptionSystemMessageUtils
// Dependencies: [1085, 7395, 8227, 5166, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 12448 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5166 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7395 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8227 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  const sendGreetMessage = MessageActionCreatorsDefault.sendGreetMessage;
  const id = messageChannel.id;
  MessageActionCreatorsDefault;
  const obj = MessageActionCreatorsDefault;
  const obj2 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  sendGreetMessage(id, stickerId, obj.getSendMessageOptionsForReply(obj2));
  const obj3 = GuildRoleSubscriptionSystemMessageUtils;
  const roleSubscriptionPurchaseSystemMessageEventProperties = obj3.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj4 = { sticker_id: stickerId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED = AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  trackWithMetadata(ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj4);
};
