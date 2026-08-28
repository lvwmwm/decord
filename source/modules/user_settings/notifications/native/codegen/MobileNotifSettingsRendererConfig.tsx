// Module ID: 15444
// Function ID: 15445
// Name: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG
// Dependencies: [15445, 15446, 2]

// Module 15444 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
import set from "set" /* 2 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15445 */;
import route from "route" /* 15446 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.VOICE_ACTIVITY_TITLE] = route.VoiceActivityTitleSetting;
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
