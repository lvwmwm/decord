// Module ID: 1163
// Function ID: 13210
// Name: reactNativeTracingIntegration
// Dependencies: [1131, 1164, 1142, 1144, 1166, 1136, 1167, 1169]

// Module 1163 (reactNativeTracingIntegration)
for (const key10015 in require("module_1131")) {
  let tmp2 = key10015;
  arg5[key10015] = require("module_1131")[key10015];
  continue;
}
for (const key10020 in require("TimeToInitialDisplay")) {
  let tmp3 = key10020;
  arg5[key10020] = require("TimeToInitialDisplay")[key10020];
  continue;
}

export const reactNativeTracingIntegration = require("getDefaultTracePropagationTargets").reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = require("getDefaultTracePropagationTargets").INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = require("getDefaultTracePropagationTargets").getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = require("getDefaultTracePropagationTargets").getReactNativeTracingIntegration;
export const reactNavigationIntegration = require("INTEGRATION_NAME").reactNavigationIntegration;
export const reactNativeNavigationIntegration = require("INTEGRATION_NAME").reactNativeNavigationIntegration;
export const startIdleNavigationSpan = require("getDefaultIdleNavigationSpanOptions").startIdleNavigationSpan;
export const startIdleSpan = require("getDefaultIdleNavigationSpanOptions").startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = require("getDefaultIdleNavigationSpanOptions").getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = require("_isNativeReflectConstruct").ReactNativeProfiler;
export const sentryTraceGesture = require("addGestureBreadcrumb").sentryTraceGesture;
