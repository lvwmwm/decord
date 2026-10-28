// Module ID: 17357
// Function ID: 17358
// Name: MobileNotifSettingsRendererConfig
// Dependencies: [16879, 17358, 17371, 2]

// Module 17357 (MobileNotifSettingsRendererConfig)
import MobileNotifSettings from "MobileNotifSettings" /* 16879 */;
import MobileNotifSettingsRoutesAll from "MobileNotifSettingsRoutes" /* 17358 */;
import MobileNotifSettingsNodesAll from "MobileNotifSettingsNodes" /* 17371 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN] = MobileNotifSettingsRoutesAll.RootRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES] = MobileNotifSettingsRoutesAll.CategoryCallsMessagesRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS] = MobileNotifSettingsRoutesAll.CategoryDiscoveryHighlightsRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY] = MobileNotifSettingsRoutesAll.CategoryFriendsActivityRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE] = MobileNotifSettingsRoutesAll.FriendActivityTitleRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS] = MobileNotifSettingsRoutesAll.CategoryServersRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUESTS] = MobileNotifSettingsNodesAll.FriendRequests;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CALLS] = MobileNotifSettingsNodesAll.Calls;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW] = MobileNotifSettingsNodesAll.MissedMessagesLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT] = MobileNotifSettingsNodesAll.MissedMessagesDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_INVITES_RECONNECTING] = MobileNotifSettingsNodesAll.InvitesReconnecting;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_TRENDING_SUGGESTIONS] = MobileNotifSettingsNodesAll.TrendingSuggestions;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_UPDATES_OFFERS] = MobileNotifSettingsNodesAll.UpdatesOffers;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CUSTOM_STATUS_UPDATE] = MobileNotifSettingsNodesAll.CustomStatusUpdate;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ONLINE] = MobileNotifSettingsNodesAll.FriendOnline;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUEST_REMINDER] = MobileNotifSettingsNodesAll.FriendRequestReminder;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_SUGGESTIONS] = MobileNotifSettingsNodesAll.FriendSuggestions;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_NUDGE_NEW_FRIEND_DM] = MobileNotifSettingsNodesAll.NudgeNewFriendDm;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_PROFILE_UPDATES] = MobileNotifSettingsNodesAll.ProfileUpdates;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING] = MobileNotifSettingsNodesAll.FriendsGaming;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_LOW] = MobileNotifSettingsNodesAll.FriendsGamingLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_DEFAULT] = MobileNotifSettingsNodesAll.FriendsGamingDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_OTHER] = MobileNotifSettingsNodesAll.GamingOther;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GO_LIVE] = MobileNotifSettingsNodesAll.GoLive;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW] = MobileNotifSettingsNodesAll.VoiceActivityLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT] = MobileNotifSettingsNodesAll.VoiceActivityDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_CHANNEL_ACTIVITY] = MobileNotifSettingsNodesAll.VoiceChannelActivity;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_POLLS] = MobileNotifSettingsNodesAll.Polls;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS] = MobileNotifSettingsNodesAll.Reactions;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GUILD_EVENT_NOTIFICATIONS] = MobileNotifSettingsNodesAll.GuildEventNotifications;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_FORUM_NOTIFICATIONS] = MobileNotifSettingsNodesAll.ForumNotifications;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_OTHER_GUILD] = MobileNotifSettingsNodesAll.OtherGuild;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_SAFETY_ALERTS] = MobileNotifSettingsNodesAll.SafetyAlerts;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_STAGE_NOTIFICATIONS] = MobileNotifSettingsNodesAll.StageNotifications;
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
