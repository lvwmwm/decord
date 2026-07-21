// Module ID: 1111
// Function ID: 12663
// Name: init
// Dependencies: []

// Module 1111 (init)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let callResult = hasOwnProperty.call(require(dependencyMap[10]), "__proto__");
if (callResult) {
  const _Object = Object;
  callResult = !hasOwnProperty2.call(exports, "__proto__");
}
if (callResult) {
  const _Object2 = Object;
  const obj = { enumerable: true, value: require(dependencyMap[10]).__proto__ };
  Object.defineProperty(exports, "__proto__", obj);
}
const keys = Object.keys(require(dependencyMap[10]));
const item = keys.forEach((arg0) => {
  let callResult = "default" === arg0;
  if (!callResult) {
    const _Object = Object;
    callResult = hasOwnProperty.call(exports, arg0);
  }
  if (!callResult) {
    exports[arg0] = require(dependencyMap[10])[arg0];
  }
});

export const init = require(dependencyMap[0]).init;
export const captureReactException = require(dependencyMap[1]).captureReactException;
export const reactErrorHandler = require(dependencyMap[1]).reactErrorHandler;
export const Profiler = require(dependencyMap[2]).Profiler;
export const useProfiler = require(dependencyMap[2]).useProfiler;
export const withProfiler = require(dependencyMap[2]).withProfiler;
export const ErrorBoundary = require(dependencyMap[3]).ErrorBoundary;
export const withErrorBoundary = require(dependencyMap[3]).withErrorBoundary;
export const createReduxEnhancer = require(dependencyMap[4]).createReduxEnhancer;
export const reactRouterV3BrowserTracingIntegration = require(dependencyMap[5]).reactRouterV3BrowserTracingIntegration;
export const tanstackRouterBrowserTracingIntegration = require(dependencyMap[6]).tanstackRouterBrowserTracingIntegration;
export const reactRouterV4BrowserTracingIntegration = require(dependencyMap[7]).reactRouterV4BrowserTracingIntegration;
export const reactRouterV5BrowserTracingIntegration = require(dependencyMap[7]).reactRouterV5BrowserTracingIntegration;
export const withSentryRouting = require(dependencyMap[7]).withSentryRouting;
export const reactRouterV6BrowserTracingIntegration = require(dependencyMap[8]).reactRouterV6BrowserTracingIntegration;
export const withSentryReactRouterV6Routing = require(dependencyMap[8]).withSentryReactRouterV6Routing;
export const wrapCreateBrowserRouterV6 = require(dependencyMap[8]).wrapCreateBrowserRouterV6;
export const wrapCreateMemoryRouterV6 = require(dependencyMap[8]).wrapCreateMemoryRouterV6;
export const wrapUseRoutesV6 = require(dependencyMap[8]).wrapUseRoutesV6;
export const reactRouterV7BrowserTracingIntegration = require(dependencyMap[9]).reactRouterV7BrowserTracingIntegration;
export const withSentryReactRouterV7Routing = require(dependencyMap[9]).withSentryReactRouterV7Routing;
export const wrapCreateBrowserRouterV7 = require(dependencyMap[9]).wrapCreateBrowserRouterV7;
export const wrapCreateMemoryRouterV7 = require(dependencyMap[9]).wrapCreateMemoryRouterV7;
export const wrapUseRoutesV7 = require(dependencyMap[9]).wrapUseRoutesV7;
