// Module ID: 10002
// Function ID: 10003
// Name: combined
// Dependencies: [676, 1996, 2]

// Module 10002 (combined)
import importDefaultResult from "combined" /* 1996 */;

const combined = "" + importDefaultResult.getArticleURL(require("ME").HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx");

export const USER_SETTINGS_VOICE_GUILD_URL = combined;
