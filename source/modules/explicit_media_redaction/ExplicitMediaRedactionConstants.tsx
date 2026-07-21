// Module ID: 6831
// Function ID: 53975
// Name: USER_SETTING_ACTION_SHEET_KEY
// Dependencies: []

// Module 6831 (USER_SETTING_ACTION_SHEET_KEY)
const items = [require(dependencyMap[0]).MessageEmbedTypes.IMAGE, require(dependencyMap[0]).MessageEmbedTypes.VIDEO, require(dependencyMap[0]).MessageEmbedTypes.GIFV];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx");

export const USER_SETTING_ACTION_SHEET_KEY = "SensitiveMediaFilterSetting";
export const EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_LEARN_MORE_ACTION_SHEET_KEY = "ExplicitMediaLearnMoreActionSheet";
export const EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaSenderFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY = "ExplicitMediaSettingsActionSheet";
export const SUPPORTED_EMBED_TYPES = new Set(items);
export const EXPLICIT_MEDIA_MIN_WIDTH = 146;
export const EXPLICIT_MEDIA_MIN_HEIGHT = 212;
