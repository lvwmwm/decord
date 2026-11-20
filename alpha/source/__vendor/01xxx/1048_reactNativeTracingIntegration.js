// Module ID: 1048
// Function ID: 1049
// Name: reactNativeTracingIntegration
// Dependencies: [1016, 1049, 1027, 1029, 1051, 1052, 1021, 1053, 1055]

// Module 1048 (reactNativeTracingIntegration)
import DEFAULT from "DEFAULT" /* 1016 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1021 */;
import _mod1027 from "module_1027" /* 1027 */;
import _mod1029 from "module_1029" /* 1029 */;
import weakMap from "weakMap" /* 1049 */;
import _mod1051 from "module_1051" /* 1051 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1052 */;
import ReactNativeProfiler from "ReactNativeProfiler" /* 1053 */;
import DEFAULT_BREADCRUMB_CATEGORY from "DEFAULT_BREADCRUMB_CATEGORY" /* 1055 */;

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

export const reactNativeTracingIntegration = _mod1027.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1027.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1027.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1027.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1029.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1051.reactNativeNavigationIntegration;
export { wrapExpoRouter_export as wrapExpoRouter };
export const startIdleNavigationSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleNavigationSpan;
export const startIdleSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = DEFAULT_NAVIGATION_SPAN_NAME.getDefaultIdleNavigationSpanOptions;
export { ReactNativeProfiler_export as ReactNativeProfiler };
export const sentryTraceGesture = DEFAULT_BREADCRUMB_CATEGORY.sentryTraceGesture;
