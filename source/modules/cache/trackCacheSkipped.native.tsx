// Module ID: 7172
// Function ID: 7173
// Name: trackCacheSkipped
// Dependencies: [676, 698, 6982, 2]
// Exports: default

// Module 7172 (trackCacheSkipped)
import { AnalyticEvents } from "ME";

const result = require("getDeviceMetadata").fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(arg0, message) {
  let obj = importDefault(698);
  obj = { load_id: null, reason: null, error_message: null, error_stack: null };
  obj[0] = require(6982) /* getDeviceMetadata */.currentLoadId();
  obj[1] = arg0;
  message = undefined;
  if (message != null) {
    message = message.message;
  }
  obj[2] = message;
  let stack;
  if (message != null) {
    stack = message.stack;
  }
  obj[3] = stack;
  obj.track(AnalyticEvents.CACHE_STORE_CACHE_SKIPPED, obj);
};
