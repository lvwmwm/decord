// Module ID: 1120
// Function ID: 12727
// Name: normalizeTransactionName
// Dependencies: [77, 1000, 794]
// Exports: reactRouterV3BrowserTracingIntegration

// Module 1120 (normalizeTransactionName)
import _defineProperty from "_defineProperty";

function normalizeTransactionName(routes, location) {
  let closure_0 = arg3;
  const pathname = location.pathname;
  arg2({ location, routes }, (arg0, arg1, routes) => {
    if (!arg0) {
      if (routes) {
        const arr = (function getRouteStringFromRoutes(arr) {
          if (Array.isArray(arr)) {
            if (0 !== arr.length) {
              const found = arr.filter((path) => path.path);
              let diff = found.length - 1;
              let num4 = -1;
              if (diff >= 0) {
                while (true) {
                  let path = found[diff].path;
                  if (null == path) {
                    diff = diff - 1;
                    num4 = -1;
                    if (diff < 0) {
                      break;
                    }
                  } else {
                    num4 = diff;
                    if (path.startsWith("/")) {
                      break;
                    }
                  }
                  break;
                }
              }
              const substr = found.slice(num4);
              return substr.reduce((arg0, path) => {
                path = path.path;
                let combined = path;
                if ("/" !== arg0) {
                  combined = path;
                  if ("" !== arg0) {
                    const _HermesInternal = HermesInternal;
                    combined = "/" + path;
                  }
                }
                return "" + arg0 + combined;
              }, "");
            }
          }
          return "";
        })(routes.routes || []);
        if (0 !== arr.length) {
          if ("/*" !== arr) {
            let tmp3 = callback(arr, "route");
          }
          return tmp3;
        }
        tmp3 = callback(arr);
        const tmp = routes.routes || [];
      }
    }
    return callback(arr);
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV3BrowserTracingIntegration = function reactRouterV3BrowserTracingIntegration(instrumentNavigation) {
  let _defineProperty;
  let dependencyMap;
  let instrumentPageLoad;
  let normalizeTransactionName;
  let obj = require(1000) /* keys */;
  let result = obj.browserTracingIntegration(Object.assign({}, instrumentNavigation, { instrumentPageLoad: false, instrumentNavigation: false }));
  require = result;
  ({ history: dependencyMap, routes: _defineProperty, match: normalizeTransactionName, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {
    afterAllSetup(arg0) {
      let closure_0 = arg0;
      closure_0.afterAllSetup(arg0);
      let _location = closure_4;
      if (closure_4) {
        _location = result(outer1_1[1]).WINDOW.location;
      }
      if (_location) {
        outer1_3(closure_2, result(outer1_1[1]).WINDOW.location, closure_3, (name) => {
          let str = "url";
          if (arguments.length > 1) {
            str = "url";
            if (undefined !== arguments[1]) {
              str = arguments[1];
            }
          }
          let obj = result(outer2_1[1]);
          obj = { name };
          const tmp = outer2_2({}, result(outer2_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
          obj.attributes = outer2_2(outer2_2(outer2_2({}, result(outer2_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), result(outer2_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.reactrouter_v3"), result(outer2_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str);
          result = obj.startBrowserTracingPageLoadSpan(closure_0, obj);
        });
      }
      let listen = closure_5;
      if (closure_5) {
        listen = closure_1.listen;
      }
      if (listen) {
        closure_1.listen((action) => {
          let tmp = "PUSH" !== action.action;
          if (tmp) {
            tmp = "POP" !== action.action;
          }
          if (!tmp) {
            outer2_3(outer1_2, action, outer1_3, (name) => {
              let str = "url";
              if (arguments.length > 1) {
                str = "url";
                if (undefined !== arguments[1]) {
                  str = arguments[1];
                }
              }
              let obj = result(outer3_1[1]);
              obj = { name };
              const tmp = outer3_2({}, result(outer3_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
              obj.attributes = outer3_2(outer3_2(outer3_2({}, result(outer3_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), result(outer3_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.reactrouter_v3"), result(outer3_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str);
              result = obj.startBrowserTracingNavigationSpan(outer1_0, obj);
            });
          }
        });
      }
    }
  };
  return Object.assign({}, result, obj);
};
