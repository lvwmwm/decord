// Module ID: 1012
// Function ID: 1013
// Name: reactRouterV6BrowserTracingIntegration
// Dependencies: [682, 889, 1013]
// Exports: reactRouterV6BrowserTracingIntegration, withSentryReactRouterV6Routing, wrapCreateBrowserRouterV6, wrapCreateMemoryRouterV6, wrapUseRoutesV6

// Module 1012 (reactRouterV6BrowserTracingIntegration)
import _mod1013 from "module_1013" /* 1013 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1013;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  const obj = _mod1013;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  const obj = _mod1013;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  const obj = _mod1013;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  const obj = _mod1013;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "6");
};
