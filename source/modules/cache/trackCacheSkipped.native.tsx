// Module ID: 6903
// Function ID: 55019
// Name: trackCacheSkipped
// Dependencies: []
// Exports: default

// Module 6903 (trackCacheSkipped)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(reason, message) {
  let obj = importDefault(dependencyMap[1]);
  obj = { load_id: require(dependencyMap[2]).currentLoadId(), reason };
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
