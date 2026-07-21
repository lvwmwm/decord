// Module ID: 6827
// Function ID: 53928
// Name: CONVERSATION_COLORS
// Dependencies: [284214097]

// Module 6827 (CONVERSATION_COLORS)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/conversations/ConversationConstants.tsx");

export const CONVERSATION_COLORS = [];
export const FETCH_LIMIT = 25;
export const MOBILE_FETCH_LIMIT = 10;
export const MIN_CONVERSATION_FETCH_BUFFER = 10;
export const MAX_CHANNELS_WITH_CONVERSATIONS = 10;
export const MAX_CONVERSATIONS_PER_CHANNEL = 50;
export const FETCH_BACKOFF_MIN_MS = 2000;
export const FETCH_BACKOFF_MAX_MS = 180000;
export const CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX = 10;
export const PREVIEW_MESSAGE_COUNT = 4;
export const MOBILE_PREVIEW_MESSAGE_COUNT = 3;
export const CONVERSATION_HAS_MORE_EXPIRATION_MS = 3600000;
