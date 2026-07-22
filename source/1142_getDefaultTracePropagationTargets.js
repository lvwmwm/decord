// Module ID: 1142
// Function ID: 13012
// Name: getDefaultTracePropagationTargets
// Dependencies: []
// Exports: getCurrentReactNativeTracingIntegration, reactNativeTracingIntegration

// Module 1142 (getDefaultTracePropagationTargets)
function getDefaultTracePropagationTargets() {
  if (!obj.isWeb()) {
    const items = [/.*/];
    return items;
  }
  const obj = require(dependencyMap[0]);
}
function getReactNativeTracingIntegration(client) {
  return client.getIntegrationByName(closure_2);
}
let closure_2 = "ReactNativeTracing";
const obj = { -664548248: null, -1419619492: null, -1037871786: null };
const _module = require(dependencyMap[0]);
obj.traceFetch = _module.isWeb();

export const INTEGRATION_NAME = "ReactNativeTracing";
export const defaultReactNativeTracingOptions = obj;
export const reactNativeTracingIntegration = function reactNativeTracingIntegration(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let obj = { currentRoute: undefined };
    const require = obj;
    const _Object = Object;
    const _Object2 = Object;
    obj = {};
    let fn = first.beforeStartSpan;
    const merged = Object.assign(Object.assign({}, obj), first);
    if (null === fn) {
      fn = (arg0) => arg0;
    }
    obj.beforeStartSpan = fn;
    let finalTimeout = first.finalTimeoutMs;
    if (null === finalTimeout) {
      finalTimeout = require(dependencyMap[1]).defaultIdleOptions.finalTimeout;
    }
    obj.finalTimeoutMs = finalTimeout;
    let idleTimeout = first.idleTimeoutMs;
    if (null === idleTimeout) {
      idleTimeout = require(dependencyMap[1]).defaultIdleOptions.idleTimeout;
    }
    obj.idleTimeoutMs = idleTimeout;
    const merged1 = Object.assign(merged, obj);
    const dependencyMap = merged1;
    let fn2 = merged1.shouldCreateSpanForRequest;
    let closure_2 = fn2;
    const devServer = require(dependencyMap[2]).getDevServer();
    let url;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url = devServer.url;
      }
    }
    obj = url;
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
      name: closure_2,
      setup(getOptions) {
          let obj = obj(merged1[1]);
          const result = obj.addDefaultOpForSpanFrom(getOptions);
          obj(merged1[1]).addThreadInfoToSpan(getOptions);
          const obj2 = obj(merged1[1]);
          obj = { traceFetch: merged1.traceFetch, traceXHR: merged1.traceXHR, shouldCreateSpanForRequest: merged1.shouldCreateSpanForRequest };
          let tracePropagationTargets = getOptions.getOptions().tracePropagationTargets;
          if (!tracePropagationTargets) {
            tracePropagationTargets = callback();
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
            const obj = {};
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
  const client = require(dependencyMap[4]).getClient();
  if (client) {
    return getReactNativeTracingIntegration(client);
  }
  const obj = require(dependencyMap[4]);
};
export { getReactNativeTracingIntegration };
