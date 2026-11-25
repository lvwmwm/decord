// Module ID: 13236
// Function ID: 13237
// Name: SmartSearchConstants
// Dependencies: [1088, 2]

// Module 13236 (SmartSearchConstants)
import DurationsDefault from "Durations" /* 1088 */;
import size from "module_2" /* 2 */;

const result = 30 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
const result1 = 60 * DurationsDefault.Millis.MINUTE;
const result2 = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchConstants.tsx");

export const SMART_SEARCH_REQUEST_TIMEOUT_MS = result;
export const MAX_CACHED_ANSWER_GUILDS = 10;
export const MAX_CACHED_ANSWERS_PER_GUILD = 5;
export const MAX_PRESENTED_CITATIONS = 3;
export const SMART_SEARCH_VIEWABILITY_THRESHOLD_PERCENT = 33;
export const MAX_CACHED_SUGGESTED_SEARCH_GUILDS = 5;
export const MAX_CACHED_SUGGESTED_SEARCH_CHANNELS = 5;
export const SUGGESTED_SEARCHES_REQUEST_LIMIT = 20;
export const SUGGESTED_SEARCH_CHANNEL_KEY_DELIMITER = "|";
export const SUGGESTED_SEARCHES_RETRY_MIN_MS = MINUTE;
export const SUGGESTED_SEARCHES_RETRY_MAX_MS = result1;
export const SUGGESTED_SEARCHES_WINDOW_SIZE = 3;
export const SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT = 40;
