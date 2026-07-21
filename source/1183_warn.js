// Module ID: 1183
// Function ID: 13475
// Name: warn
// Dependencies: []

// Module 1183 (warn)
let closure_0 = importAll(dependencyMap[0]);
({ UIManager: closure_1, View: closure_2 } = arg1(dependencyMap[1]));
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
const tmp2 = arg1(dependencyMap[1]);
if (!obj.isExpoGo()) {
  if (hasViewManagerConfig("RNSentryReplayMask")) {
    let value = arg1(dependencyMap[4]).get("RNSentryReplayMask", () => ({ uiViewClassName: "RNSentryReplayMask" }));
    const obj2 = arg1(dependencyMap[4]);
  }
  if (!obj3.isExpoGo()) {
    if (hasViewManagerConfig("RNSentryReplayUnmask")) {
      value = arg1(dependencyMap[4]).get("RNSentryReplayUnmask", () => ({ uiViewClassName: "RNSentryReplayUnmask" }));
      const obj4 = arg1(dependencyMap[4]);
    }
    exports.Mask = value;
    exports.Unmask = value;
    exports.MaskFallback = MaskFallback;
    exports.UnmaskFallback = UnmaskFallback;
  }
  const debug2 = arg1(dependencyMap[3]).debug;
  const _HermesInternal = HermesInternal;
  debug2.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayUnmask" + ".");
  value = UnmaskFallback;
  const obj3 = arg1(dependencyMap[2]);
}
const debug = arg1(dependencyMap[3]).debug;
debug.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayMask" + ".");
value = MaskFallback;
