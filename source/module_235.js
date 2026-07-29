// Module ID: 235
// Function ID: 236
// Dependencies: [236, 46, 183, 237, 92, 238, 239, 240]

// Module 235
const require = arg1;
require("MessageQueue")("Systrace", () => require(46) /* isEnabled */);
if (true !== global.RN$Bridgeless) {
  require("MessageQueue")("JSTimers", () => require(183) /* _callTimer */.default);
}
require("MessageQueue")("RCTLog", () => require(237).default);
require("MessageQueue")("RCTDeviceEventEmitter", () => require(92) /* _isNativeReflectConstruct */.default);
require("MessageQueue")("RCTNativeAppEventEmitter", () => require(238) /* _isNativeReflectConstruct */.default);
require("MessageQueue")("GlobalPerformanceLogger", () => require(239).default);
require("MessageQueue")("HMRClient", () => require(240).default);
