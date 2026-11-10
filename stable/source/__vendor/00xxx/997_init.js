// Module ID: 997
// Function ID: 998
// Name: init
// Dependencies: [998, 999, 1000, 1003, 1005, 1006, 1007, 1008, 1009, 1013, 886]

// Module 997 (init)
import _mod998 from "module_998" /* 998 */;
import captureReactException from "captureReactException" /* 999 */;
import Profiler from "Profiler" /* 1000 */;
import ErrorBoundary from "ErrorBoundary" /* 1003 */;
import _mod1005 from "module_1005" /* 1005 */;
import reactRouterV3BrowserTracingIntegration from "reactRouterV3BrowserTracingIntegration" /* 1006 */;
import tanstackRouterBrowserTracingIntegration from "tanstackRouterBrowserTracingIntegration" /* 1007 */;
import reactRouterV4BrowserTracingIntegration from "reactRouterV4BrowserTracingIntegration" /* 1008 */;
import reactRouterV6BrowserTracingIntegration from "reactRouterV6BrowserTracingIntegration" /* 1009 */;
import reactRouterV7BrowserTracingIntegration from "reactRouterV7BrowserTracingIntegration" /* 1013 */;

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

export const init = _mod998.init;
export { captureReactException_export as captureReactException };
export const reactErrorHandler = captureReactException.reactErrorHandler;
export { Profiler_export as Profiler };
export const useProfiler = Profiler.useProfiler;
export const withProfiler = Profiler.withProfiler;
export { ErrorBoundary_export as ErrorBoundary };
export const withErrorBoundary = ErrorBoundary.withErrorBoundary;
export const createReduxEnhancer = _mod1005.createReduxEnhancer;
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
