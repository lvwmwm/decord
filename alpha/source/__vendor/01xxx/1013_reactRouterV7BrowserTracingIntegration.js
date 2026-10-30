// Module ID: 1013
// Function ID: 1014
// Name: reactRouterV7BrowserTracingIntegration
// Dependencies: [681, 886, 1010]
// Exports: reactRouterV7BrowserTracingIntegration, withSentryReactRouterV7Routing, wrapCreateBrowserRouterV7, wrapCreateMemoryRouterV7, wrapUseRoutesV7

// Module 1013 (reactRouterV7BrowserTracingIntegration)
import _mod1010 from "module_1010" /* 1010 */;
import registerSpanErrorInstrumentation from "module_681" /* 681 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  const obj = _mod1010;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
}
export function withSentryReactRouterV7Routing(arg0) {
  const obj = _mod1010;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
}
export function wrapCreateBrowserRouterV7(arg0) {
  const obj = _mod1010;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
}
export function wrapCreateMemoryRouterV7(arg0) {
  const obj = _mod1010;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
}
export function wrapUseRoutesV7(arg0) {
  const obj = _mod1010;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "7");
}
