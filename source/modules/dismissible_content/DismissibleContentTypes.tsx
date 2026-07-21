// Module ID: 1335
// Function ID: 15652
// Name: isTimeRecurringDismissibleContent
// Dependencies: [0, 0]
// Exports: isGuildDismissibleContent, isSingleUseDismissibleContent

// Module 1335 (isTimeRecurringDismissibleContent)
import result from "result";

function isTimeRecurringDismissibleContent(id) {
  return items1.includes(id);
}
function isVersionedDismissibleContent(id) {
  return items.includes(id);
}
function isSnowflakeBoundDismissibleContent(id) {
  return items2.includes(id);
}
function isRecurringDismissibleContent(value) {
  let tmp = isTimeRecurringDismissibleContent(value);
  if (!tmp) {
    tmp = isVersionedDismissibleContent(value);
  }
  if (!tmp) {
    tmp = isSnowflakeBoundDismissibleContent(value);
  }
  return tmp;
}
function isSingleUseDismissibleContent(value) {
  return !isRecurringDismissibleContent(value);
}
function isSingleUseGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items4.includes(GDM_INVITE_REMINDER);
}
function isTimeRecurringGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items5.includes(GDM_INVITE_REMINDER);
}
function isSnowflakeBoundGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items3.includes(GDM_INVITE_REMINDER);
}
const items = [require("result").DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, require("result").DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, require("result").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, require("result").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE, require("result").DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER, require("result").DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL, require("result").DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE, require("result").DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA, require("result").DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER, require("result").DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER];
const items1 = [require("result").DismissibleContent.GIFTING_INTENT_FRIENDS_TAB_BADGE, require("result").DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL, require("result").DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK, require("result").DismissibleContent.GUILD_POWERUP_NOTIFICATION, require("result").DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, require("result").DismissibleContent.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, require("result").DismissibleContent.NITRO_TENURE_BADGE_LEVEL_UP, require("result").DismissibleContent.CHANNEL_REORDER_MODAL_DISMISS_SETTING, require("result").DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET, require("result").DismissibleContent.NAGBAR_NOTICE_OFFER_EXPIRING, require("result").DismissibleContent.NOTIFICATION_NUDGE_DM_HOME_BANNER, require("result").DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER, require("result").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER, require("result").DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER, require("result").DismissibleContent.GUILD_TAG_UPDATED_COACHMARK, require("result").DismissibleContent.GAME_ACCOUNT_LINK_RECURRING_UPSELL, require("result").DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, require("result").DismissibleContent.FIRST_BOOSTER_UPSELL_OVERSEER, require("result").DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE, require("result").DismissibleContent.RIOT_CONNECTION_DEPRECATION, require("result").DismissibleContent.RIOT_CONNECTION_DEPRECATION_ADMIN, require("result").DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT, require("result").DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION, require("result").DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK, require("result").DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED, require("result").DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR, require("result").DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING, require("result").DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK, require("result").DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, require("result").DismissibleContent.BATTLENET_CONNECTION_DEPRECATION, require("result").DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES];
const items2 = [require("result").DismissibleContent.GIFTING_PROMOTION_ICON, require("result").DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, require("result").DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET, require("result").DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, require("result").DismissibleContent.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, require("result").DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, require("result").DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, require("result").DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET, require("result").DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET, require("result").DismissibleContent.PREMIUM_ORBS_REWARDS_DROP_POPOVER, require("result").DismissibleContent.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE, require("result").DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, require("result").DismissibleContent.ML_REVERSE_TRIAL_UPSELL_MODAL, require("result").DismissibleContent.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, require("result").DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, require("result").DismissibleContent.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE, require("result").DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, require("result").DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, require("result").DismissibleContent.GIFTING_PROMOTION_REMINDER, require("result").DismissibleContent.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, require("result").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK, require("result").DismissibleContent.PREMIUM_OFFER_TAB_BADGE_POPOVER, require("result").DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR, require("result").DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER];
const items3 = [require("result").DismissibleContent.GAME_SHOP_NEW_BADGE, require("result").DismissibleContent.GAME_SHOP_NEW_DROP_POPOVER];
const items4 = [require("result").DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, require("result").DismissibleContent.GAME_SERVER_HOSTING_NEW_BADGE, require("result").DismissibleContent.GAME_SERVER_HOSTING_NEW_COACHMARK, require("result").DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK_V2, require("result").DismissibleContent.GAME_CLAIM_COACHMARK, require("result").DismissibleContent.FIRST_BOOSTER_UPSELL, require("result").DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, require("result").DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION];
const items5 = [require("result").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK, require("result").DismissibleContent.EXPIRING_POWERUP_COACHMARK, require("result").DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD];
const keys = Object.keys(require("result").DismissibleContent);
const mapped = keys.map((replaced) => parseInt(replaced));
const found = mapped.filter((arg0) => !isNaN(arg0));
const found1 = found.filter(isSingleUseDismissibleContent);
result = result.fileFinishedImporting("modules/dismissible_content/DismissibleContentTypes.tsx");

export const versionedDismissibleContents = items;
export const timeRecurringDismissibleContents = items1;
export const snowflakeBoundDismissibleContents = items2;
export const snowflakeBoundGuildDismissibleContents = items3;
export const singleUseGuildDismissibleContents = items4;
export const timeRecurringGuildDismissibleContents = items5;
export { isTimeRecurringDismissibleContent };
export { isVersionedDismissibleContent };
export { isSnowflakeBoundDismissibleContent };
export { isRecurringDismissibleContent };
export { isSingleUseDismissibleContent };
export { isSingleUseGuildDismissibleContent };
export { isTimeRecurringGuildDismissibleContent };
export { isSnowflakeBoundGuildDismissibleContent };
export const isGuildDismissibleContent = function isGuildDismissibleContent(closure_0) {
  let tmp = isSingleUseGuildDismissibleContent(closure_0);
  if (!tmp) {
    tmp = isTimeRecurringGuildDismissibleContent(closure_0);
  }
  if (!tmp) {
    tmp = isSnowflakeBoundGuildDismissibleContent(closure_0);
  }
  return tmp;
};
export const ALL_DISMISSIBLE_CONTENT = found;
export const ALL_SINGLE_USE_DISMISSIBLE_CONTENT = found1;
