// Module ID: 1064
// Function ID: 1065
// Name: reactNativeTracingIntegration
// Dependencies: [1032, 1065, 1043, 1045, 1067, 1068, 1037, 1069, 1071]

// Module 1064 (reactNativeTracingIntegration)
import DEFAULT from "DEFAULT" /* 1032 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1037 */;
import _mod1043 from "module_1043" /* 1043 */;
import _mod1045 from "module_1045" /* 1045 */;
import weakMap from "weakMap" /* 1065 */;
import _mod1067 from "module_1067" /* 1067 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1068 */;
import ReactNativeProfiler from "ReactNativeProfiler" /* 1069 */;
import DEFAULT_BREADCRUMB_CATEGORY from "DEFAULT_BREADCRUMB_CATEGORY" /* 1071 */;

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

export const reactNativeTracingIntegration = _mod1043.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1043.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1043.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1043.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1045.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1067.reactNativeNavigationIntegration;
export { wrapExpoRouter_export as wrapExpoRouter };
export const startIdleNavigationSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleNavigationSpan;
export const startIdleSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = DEFAULT_NAVIGATION_SPAN_NAME.getDefaultIdleNavigationSpanOptions;
export { ReactNativeProfiler_export as ReactNativeProfiler };
export const sentryTraceGesture = DEFAULT_BREADCRUMB_CATEGORY.sentryTraceGesture;
