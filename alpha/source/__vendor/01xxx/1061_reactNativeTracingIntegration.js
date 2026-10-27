// Module ID: 1061
// Function ID: 1062
// Name: reactNativeTracingIntegration
// Dependencies: [1029, 1062, 1040, 1042, 1064, 1065, 1034, 1066, 1068]

// Module 1061 (reactNativeTracingIntegration)
import DEFAULT from "DEFAULT" /* 1029 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1034 */;
import _mod1040 from "module_1040" /* 1040 */;
import _mod1042 from "module_1042" /* 1042 */;
import weakMap from "weakMap" /* 1062 */;
import _mod1064 from "module_1064" /* 1064 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1065 */;
import ReactNativeProfiler from "ReactNativeProfiler" /* 1066 */;
import DEFAULT_BREADCRUMB_CATEGORY from "DEFAULT_BREADCRUMB_CATEGORY" /* 1068 */;

for (const key10013 in DEFAULT) {
  exports[key10013] = DEFAULT[key10013];
  continue;
}
for (const key10017 in weakMap) {
  exports[key10017] = weakMap[key10017];
  continue;
}
const wrapExpoRouter_export = wrapExpoRouter.wrapExpoRouter;
const ReactNativeProfiler_export = ReactNativeProfiler.ReactNativeProfiler;

export const reactNativeTracingIntegration = _mod1040.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1040.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1040.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1040.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1042.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1064.reactNativeNavigationIntegration;
export { wrapExpoRouter_export as wrapExpoRouter };
export const startIdleNavigationSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleNavigationSpan;
export const startIdleSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = DEFAULT_NAVIGATION_SPAN_NAME.getDefaultIdleNavigationSpanOptions;
export { ReactNativeProfiler_export as ReactNativeProfiler };
export const sentryTraceGesture = DEFAULT_BREADCRUMB_CATEGORY.sentryTraceGesture;
