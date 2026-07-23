// Module ID: 1183
// Function ID: 13476
// Name: warn
// Dependencies: [31, 27, 978, 794, 42]

// Module 1183 (warn)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import isHermesEnabled from "isHermesEnabled";
import { debug } from "registerSpanErrorInstrumentation";

let closure_1;
let closure_2;
({ UIManager: closure_1, View: closure_2 } = get_ActivityIndicator);
function warn(arg0) {
  let result = arg0;
  const timerId = setTimeout(() => {
    console.warn("[SentrySessionReplay] " + result + " component is not supported on the current platform. If " + result + " should be supported, please ensure that the application build is up to date.");
  }, 0);
}
class MaskFallback {
  constructor(arg0) {
    tmp = warn("Mask");
    return result.createElement(View, Object.assign({}, global));
  }
}
class UnmaskFallback {
  constructor(arg0) {
    tmp = warn("Unmask");
    return result.createElement(View, Object.assign({}, global));
  }
}
function hasViewManagerConfig(RNSentryReplayMask) {
  hasViewManagerConfig = hasViewManagerConfig.hasViewManagerConfig;
  let callResult;
  if (null !== hasViewManagerConfig) {
    if (undefined !== hasViewManagerConfig) {
      callResult = hasViewManagerConfig.call(hasViewManagerConfig, RNSentryReplayMask);
    }
  }
  return callResult;
}
if (!isHermesEnabled.isExpoGo()) {
  if (hasViewManagerConfig("RNSentryReplayMask")) {
    let value = require("get").get("RNSentryReplayMask", () => ({ uiViewClassName: "RNSentryReplayMask" }));
    const obj2 = require("get");
  }
  if (!obj3.isExpoGo()) {
    if (hasViewManagerConfig("RNSentryReplayUnmask")) {
      value = require("get").get("RNSentryReplayUnmask", () => ({ uiViewClassName: "RNSentryReplayUnmask" }));
      const obj4 = require("get");
    }
    exports.Mask = value;
    exports.Unmask = value;
    exports.MaskFallback = MaskFallback;
    exports.UnmaskFallback = UnmaskFallback;
  }
  const debug2 = require("registerSpanErrorInstrumentation").debug;
  const _HermesInternal = HermesInternal;
  debug2.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayUnmask" + ".");
  value = UnmaskFallback;
  obj3 = require("isHermesEnabled");
}
debug.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayMask" + ".");
value = MaskFallback;
