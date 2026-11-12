// Module ID: 18490
// Function ID: 18491
// Name: MobileNotifSettingsRouteBuilders
// Dependencies: [1113, 3013, 17991, 2]
// Exports: buildCategoryCallsMessagesSettingsSection, buildCategoryDiscoveryHighlightsSettingsSection, buildCategoryFriendsActivitySettingsSection, buildCategoryServersSettingsSection, buildFriendActivityTitleSettingsSection, buildOverviewCategoriesSection, buildReactionsChoiceSettingsSection

// Module 18490 (MobileNotifSettingsRouteBuilders)
import intl2 from "intl" /* 1113 */;
import _modDef3013 from "module_3013" /* 3013 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export function buildOverviewCategoriesSection() {
  let intl;
  let items;
  const obj = { label: intl.string(_modDef3013["/UdAvP"]), settings: items };
  intl = intl2.intl;
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS];
  return obj;
}
export function buildCategoryCallsMessagesSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUESTS, MobileNotifSettings.MobileNotifSettings.NOTIF_CALLS, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_SUMMARY_REMINDER, MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS_CHOICE_ROUTE];
  return obj;
}
export function buildCategoryDiscoveryHighlightsSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_INVITES_RECONNECTING, MobileNotifSettings.MobileNotifSettings.NOTIF_TRENDING_SUGGESTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_UPDATES_OFFERS];
  return obj;
}
export function buildCategoryFriendsActivitySettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_OTHER, MobileNotifSettings.MobileNotifSettings.NOTIF_GO_LIVE, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_CHANNEL_ACTIVITY, MobileNotifSettings.MobileNotifSettings.NOTIF_POLLS, MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS];
  return obj;
}
export function buildFriendActivityTitleSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_CUSTOM_STATUS_UPDATE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ONLINE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUEST_REMINDER, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_SUGGESTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_NUDGE_NEW_FRIEND_DM, MobileNotifSettings.MobileNotifSettings.NOTIF_PROFILE_UPDATES];
  return obj;
}
export function buildCategoryServersSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_GUILD_EVENT_NOTIFICATIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_UPCOMING_SERVER_EVENT, MobileNotifSettings.MobileNotifSettings.NOTIF_FORUM_NOTIFICATIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_OTHER_GUILD, MobileNotifSettings.MobileNotifSettings.NOTIF_SAFETY_ALERTS, MobileNotifSettings.MobileNotifSettings.NOTIF_STAGE_NOTIFICATIONS];
  return obj;
}
export function buildReactionsChoiceSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS_CHOICE];
  return obj;
}
