// Module ID: 1024
// Function ID: 1025
// Name: reactRouterV6BrowserTracingIntegration
// Dependencies: [694, 901, 1025]
// Exports: reactRouterV6BrowserTracingIntegration, withSentryReactRouterV6Routing, wrapCreateBrowserRouterV6, wrapCreateMemoryRouterV6, wrapUseRoutesV6

// Module 1024 (reactRouterV6BrowserTracingIntegration)
import _mod1025 from "module_1025" /* 1025 */;
import registerSpanErrorInstrumentation from "module_694" /* 694 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1025;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  const obj = _mod1025;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "6");
};
