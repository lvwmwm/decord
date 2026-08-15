// Module ID: 15055
// Function ID: 15056
// Name: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG
// Dependencies: [15056, 15057, 2]

// Module 15055 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
const obj = {};
obj[require("MobileNotifSettings").MobileNotifSettings.VOICE_ACTIVITY_TITLE] = require("route").VoiceActivityTitleSetting;
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
