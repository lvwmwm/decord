// Module ID: 4121
// Function ID: 34282
// Name: MESSAGE_GROUP_SPACING
// Dependencies: []
// Exports: isChannelStreamMessage

// Module 4121 (MESSAGE_GROUP_SPACING)
const ChannelStreamTypes = require(dependencyMap[0]).ChannelStreamTypes;
let obj = {};
obj = {};
const frozen = Object.freeze({ copyright: -61640365, license: -50987787, source: 167119349, enabledOOP: 167119350, enabledLegacy: 167119350, overlayMethod: -13959178, reason: -13959382, detectableGamesEtag: -21103062, detectableGames: 397809597, blocklistEtag: 397809590, label_type: 1488738486 });
obj.response = 10 * importDefault(dependencyMap[1]).Millis.SECOND;
obj.deadline = importDefault(dependencyMap[1]).Millis.MINUTE;
obj.timeout = obj;
let importDefaultResult = importDefault(dependencyMap[2]);
const result = 0.5 * importDefault(dependencyMap[1]).Millis.SECOND;
importDefaultResult = new importDefaultResult(result, 60 * importDefault(dependencyMap[1]).Millis.SECOND);
obj.backoff = importDefaultResult;
obj.retries = 8;
const _module = require(dependencyMap[3]);
const result1 = _module.fileFinishedImporting("modules/messages/MessageConstants.tsx");

export const MESSAGE_GROUP_SPACING = [null, null, null, null, null];
export const DEFAULT_COZY_SPACING = 16;
export const DEFAULT_COMPACT_SPACING = 0;
export const DEFAULT_POPOUTS = frozen;
export const MESSAGE_PADDING = 16;
export const PLACEHOLDER_BUFFER = 16;
export const NEW_MESSAGE_BAR_BUFFER = 32;
export const NEW_MESSAGE_BAR_BUFFER_LARGE = 64;
export const NEW_MESSAGE_BAR_ID = "---new-messages-bar";
export const LEGACY_SPOILER_ATTACHMENT_PREFIX = "SPOILER_";
export const DEFAULT_GUILD_OFFICIAL_COLOR = 3447003;
export const GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR = 687865856;
export const GUILD_OFFICIAL_HIGHLIGHT_ALPHA = 0.16;
export const FileUploadErrorTypes = { ERROR_SOURCE_UNKNOWN: "ERROR_SOURCE_UNKNOWN", PRECOMPRESSION_SUM_TOO_LARGE: "PRECOMPRESSION_SUM_TOO_LARGE", PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE: "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", POSTCOMPRESSION_SUM_TOO_LARGE: "POSTCOMPRESSION_SUM_TOO_LARGE", POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE: "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", UPLOAD_ATTACHMENT_MAX_SIZE_ERROR: "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", EXPLICIT_CONTENT: "EXPLICIT_CONTENT" };
export const MessageTagTypes = { SYSTEM_DM_TAG_SYSTEM_TYPE: "a", BOT_TAG_SERVER_TYPE: "b", BOT_TAG_BOT_TYPE: "d", POLL_TYPE: "g" };
export const DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE = 209715200;
export const isChannelStreamMessage = function isChannelStreamMessage(type) {
  return type.type === ChannelStreamTypes.MESSAGE;
};
export const MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS = obj;
export const MessageSendLocation = { PUSH_NOTIFICATION: "push_notification", CHAT_INPUT: "chat_input", SHARE_MODAL: "share_modal", VOICE_MESSAGE: "voice_message", THREAD_CREATION: "thread_creation", FORWARDING: "forwarding", USER_PROFILE: "user_profile", RETRY: "explicit_retry", OVERLAY: "overlay", ACTIVITY_SHARE: "activity_share", ICYMI: "icymi", INSTANT_UPLOAD: "instant_upload", APP_COMMAND: "app_command", PRIVATE_MESSAGE_COMMAND: "private_message_command", POLL_CREATION: "poll_creation", SHARE_CUSTOM_THEME: "share_custom_theme", GIF_REPLY: "gif_reply", STICKER_REPLY: "sticker_reply", SEND_WAVE: "send_wave", GIFTING: "gifting", CONTENT_INVENTORY_MEMBERLIST: "content_inventory_memberlist", GREET: "greet", SOCIAL_LAYER_STOREFRONT: "social_layer_storefront", COLLECTIBLES_SHOP: "collectibles_shop", MEDIA_MENTION: "media_mention", OTHER: "other" };
