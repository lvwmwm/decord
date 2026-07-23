// Module ID: 235
// Function ID: 3241
// Dependencies: [236, 69, 178, 237, 101, 238, 204, 239]

// Module 235
const require = arg1;
require("MessageQueue")("Systrace", () => require(69) /* isEnabled */);
if (true !== global.RN$Bridgeless) {
  require("MessageQueue")("JSTimers", () => require(178) /* _allocateCallback */.default);
}
require("MessageQueue")("RCTLog", () => require(237) /* invariant */.default);
require("MessageQueue")("RCTDeviceEventEmitter", () => require(101) /* _isNativeReflectConstruct */.default);
require("MessageQueue")("RCTNativeAppEventEmitter", () => require(238) /* _isNativeReflectConstruct */.default);
require("MessageQueue")("GlobalPerformanceLogger", () => require(204) /* PerformanceLogger */.default);
require("MessageQueue")("HMRClient", () => require(239).default);
