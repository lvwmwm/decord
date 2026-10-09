// Module ID: 7347
// Function ID: 7348
// Name: trackCacheSkipped
// Dependencies: [1085, 1265, 7190, 2]
// Exports: default

// Module 7347 (trackCacheSkipped)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7190 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(reason, message) {
  let obj2;
  let stack;
  const obj = { load_id: obj2.currentLoadId(), reason, error_message: message, error_stack: stack };
  const track = AnalyticsUtilsDefault.track;
  const CACHE_STORE_CACHE_SKIPPED = AnalyticEvents.CACHE_STORE_CACHE_SKIPPED;
  AnalyticsUtilsDefault;
  message = undefined;
  obj2 = TTIAnalyticsUtils;
  if (message != null) {
    message = message.message;
  }
  stack = undefined;
  if (message != null) {
    stack = message.stack;
  }
  track(CACHE_STORE_CACHE_SKIPPED, obj);
};
