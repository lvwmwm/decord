// Module ID: 1028
// Function ID: 1029
// Dependencies: [867, 1022, 678, 886, 681]
// Exports: getCurrentReactNativeTracingIntegration, getReactNativeTracingIntegration, reactNativeTracingIntegration

// Module 1028
import _mod681 from "module_681" /* 681 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1022 */;
import module_867_mod from "module_867" /* 867 */;

let module_867;
const ReactNativeTracing = "ReactNativeTracing";
const defaultReactNativeTracingOptions = { traceFetch: module_867.isWeb(), traceXHR: true, enableHTTPTimings: true };
module_867 = module_867_mod;

export const INTEGRATION_NAME = "ReactNativeTracing";
export { defaultReactNativeTracingOptions };
export const reactNativeTracingIntegration = () => {
  let finalTimeout;
  let idleTimeout;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj5;
  let fn2;
  let url;
  let obj2 = { currentRoute: "getCurrentUser" };
  let _Object = Object;
  let fn = obj.beforeStartSpan;
  const merged = Object.assign(Object.assign({}, url), obj);
  if (null === fn) {
    fn = (arg0) => arg0;
  }
  let obj3 = { beforeStartSpan: fn, finalTimeoutMs: finalTimeout, idleTimeoutMs: idleTimeout };
  finalTimeout = obj.finalTimeoutMs;
  if (null === finalTimeout) {
    let tmp2 = obj2;
    const tmp3 = obj5;
    finalTimeout = obj2(obj5[1]).defaultIdleOptions.finalTimeout;
  }
  idleTimeout = obj.idleTimeoutMs;
  if (null === idleTimeout) {
    idleTimeout = obj2(obj5[1]).defaultIdleOptions.idleTimeout;
  }
  obj5 = assign(merged, obj3);
  fn2 = obj5.shouldCreateSpanForRequest;
  const obj4 = obj2(obj5[2]);
  const devServer = obj4.getDevServer();
  url = undefined;
  if (null !== devServer) {
    if (undefined !== devServer) {
      url = devServer.url;
    }
  }
  if (undefined !== url) {
    fn2 = (str) => {
      let tmp2 = !str.startsWith(url);
      str.startsWith(url);
      if (tmp2) {
        let tmp3Result = !fn2;
        if (fn2) {
          tmp3Result = tmp3(str);
        }
        tmp2 = tmp3Result;
      }
      return tmp2;
    };
  }
  obj5.shouldCreateSpanForRequest = fn2;
  return {
    name: fn2,
    setup(getOptions) {
      let tracePropagationTargets;
      const obj = DEFAULT_NAVIGATION_SPAN_NAME;
      const result = obj.addDefaultOpForSpanFrom(getOptions);
      obj2 = DEFAULT_NAVIGATION_SPAN_NAME;
      obj2.addThreadInfoToSpan(getOptions);
      const obj3 = { traceFetch: obj5.traceFetch, traceXHR: obj5.traceXHR, shouldCreateSpanForRequest: obj5.shouldCreateSpanForRequest, tracePropagationTargets };
      const instrumentOutgoingRequests = feedbackAsyncIntegration.instrumentOutgoingRequests;
      feedbackAsyncIntegration;
      tracePropagationTargets = getOptions.getOptions().tracePropagationTargets;
      if (!tracePropagationTargets) {
        let tmp6;
        const tmpResult = module_867;
        if (!tmpResult.isWeb()) {
          const items = [/.*/];
          tmp6 = items;
        }
        tracePropagationTargets = tmp6;
      }
      const result1 = instrumentOutgoingRequests(getOptions, obj3);
    },
    processEvent(contexts) {
      let items;
      const currentRoute = contexts.contexts && obj2.currentRoute;
      if (currentRoute) {
        const _Object = Object;
        const obj = { view_names: items };
        items = [obj2.currentRoute];
        contexts.contexts.app = Object.assign(obj, contexts.contexts.app);
      }
      return contexts;
    },
    options: obj5,
    state: obj2,
    setCurrentRoute(componentName) {
      obj2.currentRoute = componentName;
    }
  };
};
export function getCurrentReactNativeTracingIntegration() {
  const obj = _mod681;
  const client = obj.getClient();
  if (client) {
    return client.getIntegrationByName(ReactNativeTracing);
  }
}
export function getReactNativeTracingIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNativeTracing);
}
