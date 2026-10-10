// Module ID: 11074
// Function ID: 11075
// Name: UserSettingsVoiceConstants
// Dependencies: [1085, 2128, 2]

// Module 11074 (UserSettingsVoiceConstants)
import Constants from "Constants" /* 1085 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2128 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const combined = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx");

export const USER_SETTINGS_VOICE_GUILD_URL = combined;
