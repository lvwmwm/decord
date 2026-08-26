// Module ID: 15228
// Function ID: 15229
// Name: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG
// Dependencies: [15229, 15230, 2]

// Module 15228 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
import set from "set" /* 2 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15229 */;
import route from "route" /* 15230 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.VOICE_ACTIVITY_TITLE] = route.VoiceActivityTitleSetting;
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
