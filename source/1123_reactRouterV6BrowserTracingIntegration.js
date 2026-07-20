// Module ID: 1123
// Function ID: 12752
// Name: reactRouterV6BrowserTracingIntegration
// Dependencies: [978, 1136, 791]
// Exports: reactRouterV6BrowserTracingIntegration, withSentryReactRouterV6Routing, wrapCreateBrowserRouterV6, wrapCreateMemoryRouterV6, wrapUseRoutesV6

// Module 1123 (reactRouterV6BrowserTracingIntegration)
import isHermesEnabled from "isHermesEnabled";
import getDefaultIdleNavigationSpanOptions from "getDefaultIdleNavigationSpanOptions";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  return require(dependencyMap[2]).createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  return require(dependencyMap[2]).createV6CompatibleWrapUseRoutes(arg0, "6");
};
