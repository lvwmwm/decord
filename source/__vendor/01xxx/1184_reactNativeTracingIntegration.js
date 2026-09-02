// Module ID: 1184
// Function ID: 1185
// Name: reactNativeTracingIntegration
// Dependencies: [1152, 1185, 1163, 1165, 1187, 1157, 1188, 1190]

// Module 1184 (reactNativeTracingIntegration)
import startIdleSpan from "startIdleSpan" /* 1157 */;
import INTEGRATION_NAME from "INTEGRATION_NAME" /* 1163 */;
import reactNavigationIntegration from "reactNavigationIntegration" /* 1165 */;
import reactNativeNavigationIntegration from "reactNativeNavigationIntegration" /* 1187 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 1188 */;
import addGestureBreadcrumb from "addGestureBreadcrumb" /* 1190 */;

for (const key10013 in require("module_1152")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1152")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  let tmp3 = key10017;
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = INTEGRATION_NAME.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = INTEGRATION_NAME.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = INTEGRATION_NAME.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = INTEGRATION_NAME.getReactNativeTracingIntegration;
export const reactNavigationIntegration = reactNavigationIntegration.reactNavigationIntegration;
export const reactNativeNavigationIntegration = reactNativeNavigationIntegration.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _isNativeReflectConstruct.ReactNativeProfiler;
export const sentryTraceGesture = addGestureBreadcrumb.sentryTraceGesture;
