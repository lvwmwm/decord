// Module ID: 11993
// Function ID: 11994
// Name: system_message/GuildRoleSubscriptionSystemMessageUtils
// Dependencies: [1078, 7735, 8287, 4970, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 11993 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1078 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4970 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7735 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8287 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  const obj = MessageActionCreatorsDefault;
  obj.sendGreetMessage(messageChannel.id, stickerId, MessageActionCreatorsDefault.getSendMessageOptionsForReply({ channel: messageChannel, message, shouldMention: true, showMentionToggle: true }));
  const obj3 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  const roleSubscriptionPurchaseSystemMessageEventProperties = GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj6 = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj6.sticker_id = stickerId;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj6);
};
