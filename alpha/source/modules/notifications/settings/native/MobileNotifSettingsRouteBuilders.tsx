// Module ID: 17836
// Function ID: 17837
// Name: MobileNotifSettingsRouteBuilders
// Dependencies: [1125, 2866, 17355, 2]
// Exports: buildCategoryCallsMessagesSettingsSection, buildCategoryDiscoveryHighlightsSettingsSection, buildCategoryFriendsActivitySettingsSection, buildCategoryServersSettingsSection, buildFriendActivityTitleSettingsSection, buildOverviewCategoriesSection

// Module 17836 (MobileNotifSettingsRouteBuilders)
import intl2 from "intl" /* 1125 */;
import _modDef2866 from "module_2866" /* 2866 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export function buildOverviewCategoriesSection() {
  let intl;
  let items;
  const obj = { label: intl.string(_modDef2866["/UdAvP"]), settings: items };
  intl = intl2.intl;
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS];
  return obj;
}
export function buildCategoryCallsMessagesSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUESTS, MobileNotifSettings.MobileNotifSettings.NOTIF_CALLS, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT];
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
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_OTHER, MobileNotifSettings.MobileNotifSettings.NOTIF_GO_LIVE, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_CHANNEL_ACTIVITY, MobileNotifSettings.MobileNotifSettings.NOTIF_POLLS, MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS];
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
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_GUILD_EVENT_NOTIFICATIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_FORUM_NOTIFICATIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_OTHER_GUILD, MobileNotifSettings.MobileNotifSettings.NOTIF_SAFETY_ALERTS, MobileNotifSettings.MobileNotifSettings.NOTIF_STAGE_NOTIFICATIONS];
  return obj;
}
