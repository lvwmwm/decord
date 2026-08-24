// Module ID: 15119
// Function ID: 15120
// Name: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG
// Dependencies: [15120, 15121, 2]

// Module 15119 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
import set from "set" /* 2 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15120 */;
import route from "route" /* 15121 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.VOICE_ACTIVITY_TITLE] = route.VoiceActivityTitleSetting;
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
