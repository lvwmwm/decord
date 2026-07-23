// Module ID: 1127
// Function ID: 12850
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [794, 1000, 1124]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1127 (reactRouterV7BrowserTracingIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import keys from "keys";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  return require(1124) /* cancelScheduledCallback */.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  return require(1124) /* cancelScheduledCallback */.createV6CompatibleWrapUseRoutes(arg0, "7");
};
