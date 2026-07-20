// Module ID: 1335
// Function ID: 15647
// Name: isTimeRecurringDismissibleContent
// Dependencies: []
// Exports: isGuildDismissibleContent, isSingleUseDismissibleContent

// Module 1335 (isTimeRecurringDismissibleContent)
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
const items = [require(dependencyMap[0]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, require(dependencyMap[0]).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE, require(dependencyMap[0]).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER, require(dependencyMap[0]).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL, require(dependencyMap[0]).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE, require(dependencyMap[0]).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA, require(dependencyMap[0]).DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER];
const items1 = [require(dependencyMap[0]).DismissibleContent.GIFTING_INTENT_FRIENDS_TAB_BADGE, require(dependencyMap[0]).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL, require(dependencyMap[0]).DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_POWERUP_NOTIFICATION, require(dependencyMap[0]).DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, require(dependencyMap[0]).DismissibleContent.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, require(dependencyMap[0]).DismissibleContent.NITRO_TENURE_BADGE_LEVEL_UP, require(dependencyMap[0]).DismissibleContent.CHANNEL_REORDER_MODAL_DISMISS_SETTING, require(dependencyMap[0]).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET, require(dependencyMap[0]).DismissibleContent.NAGBAR_NOTICE_OFFER_EXPIRING, require(dependencyMap[0]).DismissibleContent.NOTIFICATION_NUDGE_DM_HOME_BANNER, require(dependencyMap[0]).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER, require(dependencyMap[0]).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER, require(dependencyMap[0]).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER, require(dependencyMap[0]).DismissibleContent.GUILD_TAG_UPDATED_COACHMARK, require(dependencyMap[0]).DismissibleContent.GAME_ACCOUNT_LINK_RECURRING_UPSELL, require(dependencyMap[0]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, require(dependencyMap[0]).DismissibleContent.FIRST_BOOSTER_UPSELL_OVERSEER, require(dependencyMap[0]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE, require(dependencyMap[0]).DismissibleContent.RIOT_CONNECTION_DEPRECATION, require(dependencyMap[0]).DismissibleContent.RIOT_CONNECTION_DEPRECATION_ADMIN, require(dependencyMap[0]).DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT, require(dependencyMap[0]).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION, require(dependencyMap[0]).DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK, require(dependencyMap[0]).DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED, require(dependencyMap[0]).DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR, require(dependencyMap[0]).DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING, require(dependencyMap[0]).DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK, require(dependencyMap[0]).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX, require(dependencyMap[0]).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION, require(dependencyMap[0]).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES];
const items2 = [require(dependencyMap[0]).DismissibleContent.GIFTING_PROMOTION_ICON, require(dependencyMap[0]).DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, require(dependencyMap[0]).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET, require(dependencyMap[0]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, require(dependencyMap[0]).DismissibleContent.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, require(dependencyMap[0]).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, require(dependencyMap[0]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, require(dependencyMap[0]).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET, require(dependencyMap[0]).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET, require(dependencyMap[0]).DismissibleContent.PREMIUM_ORBS_REWARDS_DROP_POPOVER, require(dependencyMap[0]).DismissibleContent.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE, require(dependencyMap[0]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, require(dependencyMap[0]).DismissibleContent.ML_REVERSE_TRIAL_UPSELL_MODAL, require(dependencyMap[0]).DismissibleContent.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, require(dependencyMap[0]).DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, require(dependencyMap[0]).DismissibleContent.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE, require(dependencyMap[0]).DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, require(dependencyMap[0]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, require(dependencyMap[0]).DismissibleContent.GIFTING_PROMOTION_REMINDER, require(dependencyMap[0]).DismissibleContent.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, require(dependencyMap[0]).DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK, require(dependencyMap[0]).DismissibleContent.PREMIUM_OFFER_TAB_BADGE_POPOVER, require(dependencyMap[0]).DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR, require(dependencyMap[0]).DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER];
const items3 = [require(dependencyMap[0]).DismissibleContent.GAME_SHOP_NEW_BADGE, require(dependencyMap[0]).DismissibleContent.GAME_SHOP_NEW_DROP_POPOVER];
const items4 = [require(dependencyMap[0]).DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, require(dependencyMap[0]).DismissibleContent.GAME_SERVER_HOSTING_NEW_BADGE, require(dependencyMap[0]).DismissibleContent.GAME_SERVER_HOSTING_NEW_COACHMARK, require(dependencyMap[0]).DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK_V2, require(dependencyMap[0]).DismissibleContent.GAME_CLAIM_COACHMARK, require(dependencyMap[0]).DismissibleContent.FIRST_BOOSTER_UPSELL, require(dependencyMap[0]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, require(dependencyMap[0]).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION];
const items5 = [require(dependencyMap[0]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK, require(dependencyMap[0]).DismissibleContent.EXPIRING_POWERUP_COACHMARK, require(dependencyMap[0]).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD];
const keys = Object.keys(require(dependencyMap[0]).DismissibleContent);
const mapped = keys.map((replaced) => parseInt(replaced));
const found = mapped.filter((arg0) => !isNaN(arg0));
const found1 = found.filter(isSingleUseDismissibleContent);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/dismissible_content/DismissibleContentTypes.tsx");

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
