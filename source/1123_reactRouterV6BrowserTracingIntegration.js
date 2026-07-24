// Module ID: 1123
// Function ID: 12758
// Name: reactRouterV6BrowserTracingIntegration
// Dependencies: [794, 1000, 1124]
// Exports: reactRouterV6BrowserTracingIntegration, withSentryReactRouterV6Routing, wrapCreateBrowserRouterV6, wrapCreateMemoryRouterV6, wrapUseRoutesV6

// Module 1123 (reactRouterV6BrowserTracingIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import keys from "keys";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  return require(1124) /* cancelScheduledCallback */.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWrapUseRoutes(arg0, "6");
};
