// Module ID: 1121
// Function ID: 12738
// Name: routeMatchToParamSpanAttributes
// Dependencies: [57, 77, 1000, 794]
// Exports: tanstackRouterBrowserTracingIntegration

// Module 1121 (routeMatchToParamSpanAttributes)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

function routeMatchToParamSpanAttributes(params) {
  const obj = {};
  if (params) {
    const _Object = Object;
    const entries = Object.entries(params.params);
    const item = entries.forEach((arg0) => {
      const tmp = outer1_2(arg0, 2);
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const tanstackRouterBrowserTracingIntegration = function tanstackRouterBrowserTracingIntegration(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    const _require = arg0;
    const _Object = Object;
    let result = _require(1000).browserTracingIntegration(Object.assign({}, obj, { instrumentNavigation: false, instrumentPageLoad: false }));
    const dependencyMap = result;
    const instrumentPageLoad = obj.instrumentPageLoad;
    let closure_2 = undefined === instrumentPageLoad || instrumentPageLoad;
    const instrumentNavigation = obj.instrumentNavigation;
    let closure_3 = undefined === instrumentNavigation || instrumentNavigation;
    const _Object2 = Object;
    obj = {
      afterAllSetup(closure_0) {
          let matchRoutes;
          let options;
          let lib = closure_0;
          closure_1.afterAllSetup(closure_0);
          const _location = lib(result[2]).WINDOW.location;
          if (closure_2) {
            if (_location) {
              ({ options, matchRoutes } = lib);
              let matchRoutesResult = matchRoutes(_location.pathname, options.parseSearch(_location.search), { preload: false, throwOnError: false });
              let routeId;
              if (null != matchRoutesResult[matchRoutesResult.length - 1]) {
                routeId = tmp4.routeId;
              }
              let tmp7;
              if ("__root__" !== routeId) {
                tmp7 = tmp4;
              }
              let obj = lib(result[2]);
              obj = { name: tmp7 ? tmp7.routeId : _location.pathname };
              const tmp11 = callback;
              const tmp14 = callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
              let str4 = "url";
              if (tmp7) {
                str4 = "route";
              }
              const tmp15 = callback(callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.tanstack_router");
              obj.attributes = Object.assign(tmp11(callback(callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.tanstack_router"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str4), outer1_4(tmp7));
              result = obj.startBrowserTracingPageLoadSpan(closure_0, obj);
              const tmp11Result = tmp11(callback(callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.tanstack_router"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str4);
            }
          }
          if (callback) {
            const subscription = lib.subscribe("onBeforeNavigate", (fromLocation) => {
              if (fromLocation.fromLocation) {
                if (fromLocation.toLocation.state !== fromLocation.fromLocation.state) {
                  let matchRoutesResult = lib.matchRoutes(fromLocation.toLocation.pathname, fromLocation.toLocation.search, { preload: false, throwOnError: false });
                  let routeId;
                  if (null != matchRoutesResult[matchRoutesResult.length - 1]) {
                    routeId = tmp13.routeId;
                  }
                  let tmp2;
                  if ("__root__" !== routeId) {
                    tmp2 = tmp13;
                  }
                  let obj = lib(result[2]);
                  obj = { name: tmp2 ? tmp2.routeId : lib(result[2]).WINDOW.location.pathname };
                  const tmp5 = lib;
                  let tmp6 = callback;
                  const tmp9 = callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
                  let str4 = "url";
                  if (tmp2) {
                    str4 = "route";
                  }
                  obj.attributes = tmp6(callback(callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.tanstack_router"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str4);
                  lib = obj.startBrowserTracingNavigationSpan(tmp5, obj);
                  let closure_1 = lib.subscribe("onResolved", (toLocation) => {
                    callback();
                    if (store) {
                      const matchRoutesResult = store.matchRoutes(toLocation.toLocation.pathname, toLocation.toLocation.search, { preload: false, throwOnError: false });
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
                        const attr = store.setAttribute(store(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
                        store.setAttributes(outer3_4(tmp6));
                      }
                    }
                  });
                  const tmp10 = callback(callback({}, lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), lib(result[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.tanstack_router");
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
