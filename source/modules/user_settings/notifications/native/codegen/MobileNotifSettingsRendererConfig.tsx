// Module ID: 15149
// Function ID: 15150
// Name: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG
// Dependencies: [15150, 15151, 2]

// Module 15149 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
import set from "set" /* 2 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15150 */;
import route from "route" /* 15151 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.VOICE_ACTIVITY_TITLE] = route.VoiceActivityTitleSetting;
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
