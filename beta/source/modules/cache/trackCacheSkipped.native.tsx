// Module ID: 7938
// Function ID: 7939
// Name: trackCacheSkipped
// Dependencies: [1078, 1245, 7754, 2]
// Exports: default

// Module 7938 (trackCacheSkipped)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7754 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(reason, message) {
  const obj2 = { load_id: null, reason: null, error_message: null, error_stack: null };
  const obj = AnalyticsUtilsDefault;
  obj2.load_id = TTIAnalyticsUtils.currentLoadId();
  obj2.reason = reason;
  message = undefined;
  if (message != null) {
    message = message.message;
  }
  obj2.error_message = message;
  let stack;
  if (message != null) {
    stack = message.stack;
  }
  obj2.error_stack = stack;
  obj.track(AnalyticEvents.CACHE_STORE_CACHE_SKIPPED, obj2);
};
