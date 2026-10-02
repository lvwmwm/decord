// Module ID: 1012
// Function ID: 1013
// Name: init
// Dependencies: [1013, 1014, 1015, 1018, 1020, 1021, 1022, 1023, 1024, 1028, 901]

// Module 1012 (init)
import _mod1013 from "module_1013" /* 1013 */;
import captureReactException from "captureReactException" /* 1014 */;
import Profiler from "Profiler" /* 1015 */;
import ErrorBoundary from "ErrorBoundary" /* 1018 */;
import _mod1020 from "module_1020" /* 1020 */;
import reactRouterV3BrowserTracingIntegration from "reactRouterV3BrowserTracingIntegration" /* 1021 */;
import tanstackRouterBrowserTracingIntegration from "tanstackRouterBrowserTracingIntegration" /* 1022 */;
import reactRouterV4BrowserTracingIntegration from "reactRouterV4BrowserTracingIntegration" /* 1023 */;
import reactRouterV6BrowserTracingIntegration from "reactRouterV6BrowserTracingIntegration" /* 1024 */;
import reactRouterV7BrowserTracingIntegration from "reactRouterV7BrowserTracingIntegration" /* 1028 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let callResult = hasOwnProperty.call(feedbackAsyncIntegration2, "__proto__");
if (callResult) {
  let _Object = Object;
  const hasOwnProperty2 = Object.prototype.hasOwnProperty;
  callResult = !hasOwnProperty2.call(exports, "__proto__");
}
if (callResult) {
  const _Object2 = Object;
  const obj = { enumerable: true, value: feedbackAsyncIntegration2.__proto__ };
  defineProperty(exports, "__proto__", obj);
}
const captureReactException_export = captureReactException.captureReactException;
const Profiler_export = Profiler.Profiler;
const ErrorBoundary_export = ErrorBoundary.ErrorBoundary;
const reactRouterV3BrowserTracingIntegration_export = reactRouterV3BrowserTracingIntegration.reactRouterV3BrowserTracingIntegration;
const tanstackRouterBrowserTracingIntegration_export = tanstackRouterBrowserTracingIntegration.tanstackRouterBrowserTracingIntegration;
const reactRouterV4BrowserTracingIntegration_export = reactRouterV4BrowserTracingIntegration.reactRouterV4BrowserTracingIntegration;
const reactRouterV6BrowserTracingIntegration_export = reactRouterV6BrowserTracingIntegration.reactRouterV6BrowserTracingIntegration;
const reactRouterV7BrowserTracingIntegration_export = reactRouterV7BrowserTracingIntegration.reactRouterV7BrowserTracingIntegration;

export const init = _mod1013.init;
export { captureReactException_export as captureReactException };
export const reactErrorHandler = captureReactException.reactErrorHandler;
export { Profiler_export as Profiler };
export const useProfiler = Profiler.useProfiler;
export const withProfiler = Profiler.withProfiler;
export { ErrorBoundary_export as ErrorBoundary };
export const withErrorBoundary = ErrorBoundary.withErrorBoundary;
export const createReduxEnhancer = _mod1020.createReduxEnhancer;
export { reactRouterV3BrowserTracingIntegration_export as reactRouterV3BrowserTracingIntegration };
export { tanstackRouterBrowserTracingIntegration_export as tanstackRouterBrowserTracingIntegration };
export { reactRouterV4BrowserTracingIntegration_export as reactRouterV4BrowserTracingIntegration };
export const reactRouterV5BrowserTracingIntegration = reactRouterV4BrowserTracingIntegration.reactRouterV5BrowserTracingIntegration;
export const withSentryRouting = reactRouterV4BrowserTracingIntegration.withSentryRouting;
export { reactRouterV6BrowserTracingIntegration_export as reactRouterV6BrowserTracingIntegration };
export const withSentryReactRouterV6Routing = reactRouterV6BrowserTracingIntegration.withSentryReactRouterV6Routing;
export const wrapCreateBrowserRouterV6 = reactRouterV6BrowserTracingIntegration.wrapCreateBrowserRouterV6;
export const wrapCreateMemoryRouterV6 = reactRouterV6BrowserTracingIntegration.wrapCreateMemoryRouterV6;
export const wrapUseRoutesV6 = reactRouterV6BrowserTracingIntegration.wrapUseRoutesV6;
export { reactRouterV7BrowserTracingIntegration_export as reactRouterV7BrowserTracingIntegration };
export const withSentryReactRouterV7Routing = reactRouterV7BrowserTracingIntegration.withSentryReactRouterV7Routing;
export const wrapCreateBrowserRouterV7 = reactRouterV7BrowserTracingIntegration.wrapCreateBrowserRouterV7;
export const wrapCreateMemoryRouterV7 = reactRouterV7BrowserTracingIntegration.wrapCreateMemoryRouterV7;
export const wrapUseRoutesV7 = reactRouterV7BrowserTracingIntegration.wrapUseRoutesV7;
export * from "feedbackAsyncIntegration";
