// Module ID: 1008
// Function ID: 1009
// Name: reactRouterV6BrowserTracingIntegration
// Dependencies: [681, 886, 1009]
// Exports: reactRouterV6BrowserTracingIntegration, withSentryReactRouterV6Routing, wrapCreateBrowserRouterV6, wrapCreateMemoryRouterV6, wrapUseRoutesV6

// Module 1008 (reactRouterV6BrowserTracingIntegration)
import _mod1009 from "module_1009" /* 1009 */;
import registerSpanErrorInstrumentation from "module_681" /* 681 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1009;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
}
export function withSentryReactRouterV6Routing(arg0) {
  const obj = _mod1009;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
}
export function wrapCreateBrowserRouterV6(arg0) {
  const obj = _mod1009;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
}
export function wrapCreateMemoryRouterV6(arg0) {
  const obj = _mod1009;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
}
export function wrapUseRoutesV6(arg0) {
  const obj = _mod1009;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "6");
}
