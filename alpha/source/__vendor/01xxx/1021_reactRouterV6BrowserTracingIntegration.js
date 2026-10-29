// Module ID: 1021
// Function ID: 1022
// Name: reactRouterV6BrowserTracingIntegration
// Dependencies: [693, 898, 1022]
// Exports: reactRouterV6BrowserTracingIntegration, withSentryReactRouterV6Routing, wrapCreateBrowserRouterV6, wrapCreateMemoryRouterV6, wrapUseRoutesV6

// Module 1021 (reactRouterV6BrowserTracingIntegration)
import _mod1022 from "module_1022" /* 1022 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1022;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
}
export function withSentryReactRouterV6Routing(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
}
export function wrapCreateBrowserRouterV6(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
}
export function wrapCreateMemoryRouterV6(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
}
export function wrapUseRoutesV6(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "6");
}
