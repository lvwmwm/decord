// Module ID: 11388
// Function ID: 11389
// Name: UserSettingsVoiceConstants
// Dependencies: [1087, 2131, 2]

// Module 11388 (UserSettingsVoiceConstants)
import Constants from "Constants" /* 1087 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2131 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const combined = "" + HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx");

export const USER_SETTINGS_VOICE_GUILD_URL = combined;
