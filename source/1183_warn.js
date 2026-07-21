// Module ID: 1183
// Function ID: 13471
// Name: warn
// Dependencies: [0, 0, 0, 0, 0]

// Module 1183 (warn)
import closure_0 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { debug } from "__exportStarResult1";

({ UIManager: closure_1, View: closure_2 } = __exportStarResult1);
function warn(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => {
    console.warn("[SentrySessionReplay] " + arg0 + " component is not supported on the current platform. If " + arg0 + " should be supported, please ensure that the application build is up to date.");
  }, 0);
}
class MaskFallback {
  constructor(arg0) {
    tmp = warn("Mask");
    return importAll.createElement(View, Object.assign({}, global));
  }
}
class UnmaskFallback {
  constructor(arg0) {
    tmp = warn("Unmask");
    return importAll.createElement(View, Object.assign({}, global));
  }
}
function hasViewManagerConfig(RNSentryReplayMask) {
  const hasViewManagerConfig = hasViewManagerConfig.hasViewManagerConfig;
  let callResult;
  if (null !== hasViewManagerConfig) {
    if (undefined !== hasViewManagerConfig) {
      callResult = hasViewManagerConfig.call(hasViewManagerConfig, RNSentryReplayMask);
    }
  }
  return callResult;
}
if (!__exportStarResult1.isExpoGo()) {
  if (hasViewManagerConfig("RNSentryReplayMask")) {
    let value = require("__exportStarResult1").get("RNSentryReplayMask", () => ({ uiViewClassName: "RNSentryReplayMask" }));
    const obj2 = require("__exportStarResult1");
  }
  if (!obj3.isExpoGo()) {
    if (hasViewManagerConfig("RNSentryReplayUnmask")) {
      value = require("__exportStarResult1").get("RNSentryReplayUnmask", () => ({ uiViewClassName: "RNSentryReplayUnmask" }));
      const obj4 = require("__exportStarResult1");
    }
    exports.Mask = value;
    exports.Unmask = value;
    exports.MaskFallback = MaskFallback;
    exports.UnmaskFallback = UnmaskFallback;
  }
  const debug2 = require("__exportStarResult1").debug;
  const _HermesInternal = HermesInternal;
  debug2.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayUnmask" + ".");
  value = UnmaskFallback;
  const obj3 = require("__exportStarResult1");
}
debug.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayMask" + ".");
value = MaskFallback;
