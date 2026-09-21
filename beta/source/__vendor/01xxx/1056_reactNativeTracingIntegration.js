// Module ID: 1056
// Function ID: 1057
// Name: reactNativeTracingIntegration
// Dependencies: [1024, 1057, 1035, 1037, 1059, 1029, 1060, 1062]

// Module 1056 (reactNativeTracingIntegration)
import startIdleSpan from "startIdleSpan" /* 1029 */;
import _mod1035 from "module_1035" /* 1035 */;
import _mod1037 from "module_1037" /* 1037 */;
import _mod1059 from "module_1059" /* 1059 */;
import _mod1060 from "module_1060" /* 1060 */;
import sentryTraceGesture from "sentryTraceGesture" /* 1062 */;

const require = globalThis.__r;

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1035.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1035.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1035.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1035.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1037.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1059.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1060.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
