// Module ID: 1121
// Function ID: 12733
// Name: routeMatchToParamSpanAttributes
// Dependencies: []
// Exports: tanstackRouterBrowserTracingIntegration

// Module 1121 (routeMatchToParamSpanAttributes)
function routeMatchToParamSpanAttributes(params) {
  const obj = {};
  if (params) {
    const require = obj;
    const _Object = Object;
    const entries = Object.entries(params.params);
    const item = entries.forEach((arg0) => {
      const tmp = callback(arg0, 2);
      const first = tmp[0];
      obj["url.path.params." + first] = tmp[1];
      obj["url.path.parameter." + first] = tmp[1];
      obj["params." + first] = tmp[1];
    });
    return obj;
  } else {
    return obj;
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const tanstackRouterBrowserTracingIntegration = function tanstackRouterBrowserTracingIntegration(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const require = arg0;
    const _Object = Object;
    const result = require(dependencyMap[2]).browserTracingIntegration(Object.assign({}, obj, { toValue: null, useNativeDriver: null }));
    const dependencyMap = result;
    const instrumentPageLoad = obj.instrumentPageLoad;
    let closure_2 = undefined === instrumentPageLoad || instrumentPageLoad;
    const instrumentNavigation = obj.instrumentNavigation;
    let closure_3 = undefined === instrumentNavigation || instrumentNavigation;
    const _Object2 = Object;
    obj = {
      afterAllSetup(emit) {
          let matchRoutes;
          let options;
          result.afterAllSetup(emit);
          const _location = emit(result[2]).WINDOW.location;
          if (closure_2) {
            if (_location) {
              ({ options, matchRoutes } = emit);
              const matchRoutesResult = matchRoutes(_location.pathname, options.parseSearch(_location.search), { <string:626065412>: null, <string:819217569>: null });
              let routeId;
              if (null != matchRoutesResult[matchRoutesResult.length - 1]) {
                routeId = tmp4.routeId;
              }
              let tmp7;
              if ("__root__" !== routeId) {
                tmp7 = tmp4;
              }
              let obj = emit(result[2]);
              obj = { name: tmp7 ? tmp7.routeId : _location.pathname };
              const tmp11 = callback;
              const tmp14 = callback({}, emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
              let str4 = "url";
              if (tmp7) {
                str4 = "route";
              }
              const tmp15 = callback(callback({}, emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.tanstack_router");
              obj.attributes = Object.assign(tmp11(callback(callback({}, emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.tanstack_router"), emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str4), callback2(tmp7));
              const result = obj.startBrowserTracingPageLoadSpan(emit, obj);
              const tmp11Result = tmp11(callback(callback({}, emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.tanstack_router"), emit(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str4);
            }
          }
          if (callback) {
            const subscription = emit.subscribe("onBeforeNavigate", (fromLocation) => {
              if (fromLocation.fromLocation) {
                if (fromLocation.toLocation.state !== fromLocation.fromLocation.state) {
                  const matchRoutesResult = emit.matchRoutes(fromLocation.toLocation.pathname, fromLocation.toLocation.search, { <string:626065412>: null, <string:819217569>: null });
                  let routeId;
                  if (null != matchRoutesResult[matchRoutesResult.length - 1]) {
                    routeId = tmp13.routeId;
                  }
                  let tmp2;
                  if ("__root__" !== routeId) {
                    tmp2 = tmp13;
                  }
                  let obj = emit(closure_1[2]);
                  obj = { name: tmp2 ? tmp2.routeId : emit(closure_1[2]).WINDOW.location.pathname };
                  const tmp5 = emit;
                  const tmp6 = callback;
                  const tmp9 = callback({}, emit(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
                  let str4 = "url";
                  if (tmp2) {
                    str4 = "route";
                  }
                  obj.attributes = tmp6(callback(callback({}, emit(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), emit(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.tanstack_router"), emit(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str4);
                  const emit = obj.startBrowserTracingNavigationSpan(tmp5, obj);
                  closure_1 = emit.subscribe("onResolved", (toLocation) => {
                    callback();
                    if (store) {
                      const matchRoutesResult = store.matchRoutes(toLocation.toLocation.pathname, toLocation.toLocation.search, { <string:626065412>: null, <string:819217569>: null });
                      let routeId;
                      if (null != matchRoutesResult[matchRoutesResult.length - 1]) {
                        routeId = tmp3.routeId;
                      }
                      let tmp6;
                      if ("__root__" !== routeId) {
                        tmp6 = tmp3;
                      }
                      if (tmp6) {
                        store.updateName(tmp6.routeId);
                        const attr = store.setAttribute(store(callback[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
                        store.setAttributes(callback2(tmp6));
                      }
                    }
                  });
                  const tmp10 = callback(callback({}, emit(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), emit(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.tanstack_router");
                }
              }
            });
          }
        }
    };
    return Object.assign({}, result, obj);
  }
  obj = {};
};
