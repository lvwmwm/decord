// Module ID: 10328
// Function ID: 10329
// Name: UserSettingsVoiceConstants
// Dependencies: [1074, 2110, 2]

// Module 10328 (UserSettingsVoiceConstants)
import HelpdeskUtils from "HelpdeskUtils" /* 2110 */;

const combined = "" + HelpdeskUtils.getArticleURL(fn(1074).HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx");

export const USER_SETTINGS_VOICE_GUILD_URL = combined;
