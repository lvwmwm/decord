// Module ID: 12139
// Function ID: 12140
// Name: UserSettingsVoiceConstants
// Dependencies: [1072, 2190, 2]

// Module 12139 (UserSettingsVoiceConstants)
import Constants from "Constants" /* 1072 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2190 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const combined = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx");

export const USER_SETTINGS_VOICE_GUILD_URL = combined;
