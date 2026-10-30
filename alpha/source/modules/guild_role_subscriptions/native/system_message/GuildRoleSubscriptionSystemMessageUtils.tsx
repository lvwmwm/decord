// Module ID: 13204
// Function ID: 13205
// Name: system_message/GuildRoleSubscriptionSystemMessageUtils
// Dependencies: [1072, 7629, 8441, 5755, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 13204 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7629 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8441 */;
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
