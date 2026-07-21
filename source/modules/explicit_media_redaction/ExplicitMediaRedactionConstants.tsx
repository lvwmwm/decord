// Module ID: 6830
// Function ID: 53963
// Name: USER_SETTING_ACTION_SHEET_KEY
// Dependencies: [6842, 6843]

// Module 6830 (USER_SETTING_ACTION_SHEET_KEY)
import arrayIncludes from "arrayIncludes";

const items = [require("baseUniq").MessageEmbedTypes.IMAGE, require("baseUniq").MessageEmbedTypes.VIDEO, require("baseUniq").MessageEmbedTypes.GIFV];
const result = arrayIncludes.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionConstants.tsx");

export const USER_SETTING_ACTION_SHEET_KEY = "SensitiveMediaFilterSetting";
export const EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_LEARN_MORE_ACTION_SHEET_KEY = "ExplicitMediaLearnMoreActionSheet";
export const EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY = "ExplicitMediaSenderFalsePositiveActionSheet";
export const EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY = "ExplicitMediaSettingsActionSheet";
export const SUPPORTED_EMBED_TYPES = new Set(items);
export const EXPLICIT_MEDIA_MIN_WIDTH = 146;
export const EXPLICIT_MEDIA_MIN_HEIGHT = 212;
