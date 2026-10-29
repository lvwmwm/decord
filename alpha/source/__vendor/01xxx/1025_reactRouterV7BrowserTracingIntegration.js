// Module ID: 1025
// Function ID: 1026
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [693, 898, 1022]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1025 (reactRouterV7BrowserTracingIntegration)
import _mod1022 from "module_1022" /* 1022 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1022;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
}
export function withSentryReactRouterV7Routing(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
}
export function wrapCreateBrowserRouterV7(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
}
export function wrapCreateMemoryRouterV7(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
}
export function wrapUseRoutesV7(arg0) {
  const obj = _mod1022;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "7");
}
