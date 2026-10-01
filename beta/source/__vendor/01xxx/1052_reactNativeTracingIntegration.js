// Module ID: 1052
// Function ID: 1053
// Name: reactNativeTracingIntegration
// Dependencies: [1020, 1053, 1031, 1033, 1055, 1025, 1056, 1058]

// Module 1052 (reactNativeTracingIntegration)
import DEFAULT from "DEFAULT" /* 1020 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1025 */;
import _mod1031 from "module_1031" /* 1031 */;
import _mod1033 from "module_1033" /* 1033 */;
import weakMap from "weakMap" /* 1053 */;
import _mod1055 from "module_1055" /* 1055 */;
import ReactNativeProfiler from "ReactNativeProfiler" /* 1056 */;
import DEFAULT_BREADCRUMB_CATEGORY from "DEFAULT_BREADCRUMB_CATEGORY" /* 1058 */;

for (const key10013 in DEFAULT) {
  exports[key10013] = DEFAULT[key10013];
  continue;
}
for (const key10017 in weakMap) {
  exports[key10017] = weakMap[key10017];
  continue;
}
const ReactNativeProfiler_export = ReactNativeProfiler.ReactNativeProfiler;

export const reactNativeTracingIntegration = _mod1031.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1031.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1031.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1031.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1033.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1055.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleNavigationSpan;
export const startIdleSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = DEFAULT_NAVIGATION_SPAN_NAME.getDefaultIdleNavigationSpanOptions;
export { ReactNativeProfiler_export as ReactNativeProfiler };
export const sentryTraceGesture = DEFAULT_BREADCRUMB_CATEGORY.sentryTraceGesture;
