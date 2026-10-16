// Module ID: 16946
// Function ID: 16947
// Name: MobileNotifSettingsRendererConfig
// Dependencies: [16467, 16947, 16959, 2]

// Module 16946 (MobileNotifSettingsRendererConfig)
import MobileNotifSettings from "MobileNotifSettings" /* 16467 */;
import MobileNotifSettingsRoutesAll from "MobileNotifSettingsRoutes" /* 16947 */;
import MobileNotifSettingsNodesAll from "MobileNotifSettingsNodes" /* 16959 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN] = MobileNotifSettingsRoutesAll.RootRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_REALTIME] = MobileNotifSettingsRoutesAll.RealtimeRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = MobileNotifSettingsRoutesAll.CategorySocialRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVER] = MobileNotifSettingsRoutesAll.CategoryServerRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_OTHER] = MobileNotifSettingsRoutesAll.CategoryOtherRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS] = MobileNotifSettingsNodesAll.Reactions;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW] = MobileNotifSettingsNodesAll.MissedMessagesLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT] = MobileNotifSettingsNodesAll.MissedMessagesDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW] = MobileNotifSettingsNodesAll.VoiceActivityLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT] = MobileNotifSettingsNodesAll.VoiceActivityDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_LOW] = MobileNotifSettingsNodesAll.GamingLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_DEFAULT] = MobileNotifSettingsNodesAll.GamingDefault;
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
