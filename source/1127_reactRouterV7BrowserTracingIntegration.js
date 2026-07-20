// Module ID: 1127
// Function ID: 12845
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [978, 1136, 791]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1127 (reactRouterV7BrowserTracingIntegration)
import isHermesEnabled from "isHermesEnabled";
import getDefaultIdleNavigationSpanOptions from "getDefaultIdleNavigationSpanOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  return require(dependencyMap[2]).createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWrapUseRoutes(arg0, "7");
};
