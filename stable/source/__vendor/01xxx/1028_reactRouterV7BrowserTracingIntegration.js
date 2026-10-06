// Module ID: 1028
// Function ID: 1029
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [694, 901, 1025]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1028 (reactRouterV7BrowserTracingIntegration)
import _mod1025 from "module_1025" /* 1025 */;
import registerSpanErrorInstrumentation from "module_694" /* 694 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1025;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "7");
};
