// Module ID: 1020
// Function ID: 1021
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [686, 893, 1017]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1020 (reactRouterV7BrowserTracingIntegration)
import computeLocationKey from "computeLocationKey" /* 1017 */;
import registerSpanErrorInstrumentation from "module_686" /* 686 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 893 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  return computeLocationKey.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  return computeLocationKey.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapUseRoutes(arg0, "7");
};
