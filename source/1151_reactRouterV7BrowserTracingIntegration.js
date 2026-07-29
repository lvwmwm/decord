// Module ID: 1151
// Function ID: 1152
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [817, 1024, 1148]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1151 (reactRouterV7BrowserTracingIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import feedbackAsyncIntegration from "feedbackAsyncIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  return require(1148) /* computeLocationKey */.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  return require(1148) /* computeLocationKey */.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  return require(1148) /* computeLocationKey */.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  return require(1148) /* computeLocationKey */.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  return require(1148) /* computeLocationKey */.createV6CompatibleWrapUseRoutes(arg0, "7");
};
