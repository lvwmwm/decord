// Module ID: 1142
// Function ID: 13014
// Name: getDefaultTracePropagationTargets
// Dependencies: [978, 1136, 791, 1000, 794]
// Exports: getCurrentReactNativeTracingIntegration, reactNativeTracingIntegration

// Module 1142 (getDefaultTracePropagationTargets)
import isHermesEnabled from "isHermesEnabled";

function getDefaultTracePropagationTargets() {
  if (!obj.isWeb()) {
    const items = [/.*/];
    return items;
  }
  obj = require(978) /* isHermesEnabled */;
}
function getReactNativeTracingIntegration(client) {
  return client.getIntegrationByName(ReactNativeTracing);
}
const ReactNativeTracing = "ReactNativeTracing";
let obj = { traceFetch: null, traceXHR: true, enableHTTPTimings: true };
obj.traceFetch = isHermesEnabled.isWeb();

export const INTEGRATION_NAME = "ReactNativeTracing";
export const defaultReactNativeTracingOptions = obj;
export const reactNativeTracingIntegration = function reactNativeTracingIntegration(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let obj = { currentRoute: undefined };
    let _Object = Object;
    const _Object2 = Object;
    obj = {};
    let fn = first.beforeStartSpan;
    const merged = Object.assign(Object.assign({}, url), first);
    if (null === fn) {
      fn = (arg0) => arg0;
    }
    obj.beforeStartSpan = fn;
    let finalTimeout = first.finalTimeoutMs;
    if (null === finalTimeout) {
      finalTimeout = obj(merged1[1]).defaultIdleOptions.finalTimeout;
    }
    obj.finalTimeoutMs = finalTimeout;
    let idleTimeout = first.idleTimeoutMs;
    if (null === idleTimeout) {
      idleTimeout = obj(merged1[1]).defaultIdleOptions.idleTimeout;
    }
    obj.idleTimeoutMs = idleTimeout;
    merged1 = Object.assign(merged, obj);
    let fn2 = merged1.shouldCreateSpanForRequest;
    const devServer = obj(merged1[2]).getDevServer();
    url = undefined;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url = devServer.url;
      }
    }
    if (undefined !== url) {
      fn2 = (str) => {
        let tmp = !str.startsWith(url);
        if (tmp) {
          let tmp3 = !fn2;
          if (!tmp3) {
            tmp3 = fn2(str);
          }
          tmp = tmp3;
        }
        return tmp;
      };
    }
    merged1.shouldCreateSpanForRequest = fn2;
    const obj1 = {
      name: fn2,
      setup(getOptions) {
          obj = obj(merged1[1]);
          const result = obj.addDefaultOpForSpanFrom(getOptions);
          obj(merged1[1]).addThreadInfoToSpan(getOptions);
          const obj2 = obj(merged1[1]);
          obj = { traceFetch: merged1.traceFetch, traceXHR: merged1.traceXHR, shouldCreateSpanForRequest: merged1.shouldCreateSpanForRequest };
          let tracePropagationTargets = getOptions.getOptions().tracePropagationTargets;
          if (!tracePropagationTargets) {
            tracePropagationTargets = outer1_4();
          }
          obj.tracePropagationTargets = tracePropagationTargets;
          const result1 = obj(merged1[3]).instrumentOutgoingRequests(getOptions, obj);
        },
      processEvent(contexts) {
          let currentRoute = contexts.contexts;
          if (currentRoute) {
            currentRoute = obj.currentRoute;
          }
          if (currentRoute) {
            const _Object = Object;
            obj = {};
            const items = [obj.currentRoute];
            obj.view_names = items;
            contexts.contexts.app = Object.assign(obj, contexts.contexts.app);
          }
          return contexts;
        },
      options: merged1,
      state: obj,
      setCurrentRoute(componentName) {
          obj.currentRoute = componentName;
        }
    };
    return obj1;
  }
  first = {};
};
export const getCurrentReactNativeTracingIntegration = function getCurrentReactNativeTracingIntegration() {
  const client = require(794) /* registerSpanErrorInstrumentation */.getClient();
  if (client) {
    return getReactNativeTracingIntegration(client);
  }
  const obj = require(794) /* registerSpanErrorInstrumentation */;
};
export { getReactNativeTracingIntegration };
