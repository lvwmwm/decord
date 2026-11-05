// Module ID: 13486
// Function ID: 13487
// Name: system_message/GuildRoleSubscriptionSystemMessageUtils
// Dependencies: [1072, 7781, 8595, 5897, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 13486 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5897 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7781 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8595 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
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
}
