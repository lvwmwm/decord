// Module ID: 1120
// Function ID: 12722
// Name: normalizeTransactionName
// Dependencies: []
// Exports: reactRouterV3BrowserTracingIntegration

// Module 1120 (normalizeTransactionName)
function normalizeTransactionName(routes, location) {
  const require = arg3;
  const dependencyMap = location.pathname;
  arg2({ location, routes }, (arg0, arg1, routes) => {
    if (!arg0) {
      if (routes) {
        const arr = function getRouteStringFromRoutes(arr) {
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
        }(routes.routes || []);
        if (0 !== arr.length) {
          if ("/*" !== arr) {
            const pathname = arr;
            let tmp3 = arg3(arr, "route");
          }
          return tmp3;
        }
        tmp3 = arg3(pathname);
        const tmp = routes.routes || [];
      }
    }
    return arg3(pathname);
  });
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV3BrowserTracingIntegration = function reactRouterV3BrowserTracingIntegration(instrumentNavigation) {
  let instrumentPageLoad;
  let obj = require(dependencyMap[1]);
  const result = obj.browserTracingIntegration(Object.assign({}, instrumentNavigation, {}));
  const require = result;
  ({ history: closure_1, routes: closure_2, match: closure_3, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {
    afterAllSetup(arg0) {
      const result = arg0;
      result.afterAllSetup(arg0);
      let _location = closure_4;
      if (closure_4) {
        _location = result(closure_1[1]).WINDOW.location;
      }
      if (_location) {
        callback(closure_2, result(closure_1[1]).WINDOW.location, callback, (name) => {
          let str = "url";
          if (arguments.length > 1) {
            str = "url";
            if (undefined !== arguments[1]) {
              str = arguments[1];
            }
          }
          let obj = name(closure_1[1]);
          obj = { name };
          const tmp = callback({}, name(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
          obj.attributes = callback(callback(callback({}, name(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), name(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.reactrouter_v3"), name(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str);
          const result = obj.startBrowserTracingPageLoadSpan(name, obj);
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
            callback2(closure_2, action, callback2, (name) => {
              let str = "url";
              if (arguments.length > 1) {
                str = "url";
                if (undefined !== arguments[1]) {
                  str = arguments[1];
                }
              }
              let obj = callback(closure_1[1]);
              obj = { name };
              const tmp = callback2({}, callback(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
              obj.attributes = callback2(callback2(callback2({}, callback(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), callback(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.reactrouter_v3"), callback(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str);
              const result = obj.startBrowserTracingNavigationSpan(callback, obj);
            });
          }
        });
      }
    }
  };
  return Object.assign({}, result, obj);
};
