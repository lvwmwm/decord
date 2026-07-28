// Module ID: 5932
// Function ID: 52487
// Name: trackCacheSkipped
// Dependencies: [653, 675, 5713, 2]
// Exports: default

// Module 5932 (trackCacheSkipped)
import { AnalyticEvents } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(reason, message) {
  let obj = importDefault(675);
  obj = { load_id: require(5713) /* _createForOfIteratorHelperLoose */.currentLoadId(), reason };
  message = undefined;
  if (null != message) {
    message = message.message;
  }
  obj.error_message = message;
  let stack;
  if (null != message) {
    stack = message.stack;
  }
  obj.error_stack = stack;
  obj.track(AnalyticEvents.CACHE_STORE_CACHE_SKIPPED, obj);
};
