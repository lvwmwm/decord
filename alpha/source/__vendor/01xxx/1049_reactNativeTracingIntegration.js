// Module ID: 1049
// Function ID: 1050
// Name: reactNativeTracingIntegration
// Dependencies: [1017, 1050, 1028, 1030, 1052, 1053, 1022, 1054, 1056]

// Module 1049 (reactNativeTracingIntegration)
import DEFAULT from "DEFAULT" /* 1017 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1022 */;
import _mod1028 from "module_1028" /* 1028 */;
import _mod1030 from "module_1030" /* 1030 */;
import weakMap from "weakMap" /* 1050 */;
import _mod1052 from "module_1052" /* 1052 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1053 */;
import ReactNativeProfiler from "ReactNativeProfiler" /* 1054 */;
import DEFAULT_BREADCRUMB_CATEGORY from "DEFAULT_BREADCRUMB_CATEGORY" /* 1056 */;

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

export const reactNativeTracingIntegration = _mod1028.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1028.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1028.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1028.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1030.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1052.reactNativeNavigationIntegration;
export { wrapExpoRouter_export as wrapExpoRouter };
export const startIdleNavigationSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleNavigationSpan;
export const startIdleSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = DEFAULT_NAVIGATION_SPAN_NAME.getDefaultIdleNavigationSpanOptions;
export { ReactNativeProfiler_export as ReactNativeProfiler };
export const sentryTraceGesture = DEFAULT_BREADCRUMB_CATEGORY.sentryTraceGesture;
