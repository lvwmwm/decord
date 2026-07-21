// Module ID: 1122
// Function ID: 12740
// Name: instrumentReactRouter
// Dependencies: []
// Exports: reactRouterV4BrowserTracingIntegration, reactRouterV5BrowserTracingIntegration, withSentryRouting

// Module 1122 (instrumentReactRouter)
function instrumentReactRouter(emit, arg1, arg2, location) {
  let tmp10;
  let tmp11;
  let listen = arg2;
  const require = emit;
  const dependencyMap = arg4;
  function normalizeTransactionName(pathname) {
    if (0 !== lib.length) {
      if (tmp2) {
        const tmp4 = callback(lib, pathname, lib);
        for (const item10012 of tmp4) {
          let tmp6 = item10012;
          if (item10012.match.isExact) {
            let items = [item10012.match.path, ];
            let str = "route";
            items[1] = "route";
            obj.return();
            return items;
          } else {
            // continue
          }
        }
        const items1 = [pathname, "url"];
        return items1;
      }
    }
    const items2 = [pathname, "url"];
    return items2;
  }
  let closure_4 = normalizeTransactionName;
  if (arguments.length > 5) {
    const callback = [];
    let tmp2;
    if (arguments.length > 6) {
      tmp2 = arguments[6];
    }
    const callback2 = tmp2;
    if (arg1) {
      if (location.location) {
        let pathname = location.location.pathname;
      } else if (require(dependencyMap[3]).WINDOW.location) {
        pathname = require(dependencyMap[3]).WINDOW.location.pathname;
      }
      if (pathname) {
        [tmp10, tmp11] = callback2(normalizeTransactionName(pathname), 2);
        let obj = require(dependencyMap[3]);
        obj = { name: tmp10 };
        const tmp9 = callback2(normalizeTransactionName(pathname), 2);
        const _HermesInternal = HermesInternal;
        const tmp15 = callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
        obj.attributes = callback(callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react." + arg4), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp11);
        const result = obj.startBrowserTracingPageLoadSpan(emit, obj);
        const tmp17 = callback(callback({}, require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), require(dependencyMap[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react." + arg4);
      }
    }
    if (listen) {
      listen = location.listen;
    }
    if (listen) {
      location.listen((pathname) => {
        let tmp5;
        let tmp6;
        if (arg1) {
          if ("PUSH" === arg1) {
            [tmp5, tmp6] = pathname(normalizeTransactionName(pathname.pathname), 2);
            let obj = pathname(arg4[3]);
            obj = { name: tmp5 };
            const tmp4 = pathname(normalizeTransactionName(pathname.pathname), 2);
            const _HermesInternal = HermesInternal;
            const tmp11 = lib({}, pathname(arg4[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
            obj.attributes = lib(lib(lib({}, pathname(arg4[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), pathname(arg4[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react." + arg4), pathname(arg4[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp6);
            const result = obj.startBrowserTracingNavigationSpan(pathname, obj);
            const tmp14 = lib(lib({}, pathname(arg4[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), pathname(arg4[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react." + arg4);
          }
        }
      });
    }
  }
}
function matchRoutes(pathname, search, arg2) {
  const require = search;
  const dependencyMap = arg2;
  if (arguments.length > 3) {
    if (undefined !== arguments[3]) {
      let items = arguments[3];
    }
    let closure_2 = items;
    pathname.some((path) => {
      if (path.path) {
        let match = arg2(arg1, path);
      } else if (items.length) {
        match = items[closure_2.length - 1].match;
      } else {
        match = { "Null": "Array", "Null": "isArray", params: {}, isExact: "/" === arg1 };
      }
      if (match) {
        const obj = { route: path, match };
        items.push(obj);
        if (path.routes) {
          callback(path.routes, arg1, arg2, items);
        }
      }
      return match;
    });
    return items;
  }
  items = [];
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = require(dependencyMap[2]);

export const reactRouterV4BrowserTracingIntegration = function reactRouterV4BrowserTracingIntegration(instrumentNavigation) {
  let instrumentPageLoad;
  let obj = require(dependencyMap[3]);
  const result = obj.browserTracingIntegration(Object.assign({}, instrumentNavigation, { isArray: null, scales: null }));
  const require = result;
  ({ history: closure_1, routes: closure_2, matchPath: closure_3, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {
    afterAllSetup(arg0) {
      result.afterAllSetup(arg0);
      callback(arg0, closure_4, callback, closure_1, "reactrouter_v4", closure_2, closure_3);
    }
  };
  return Object.assign({}, result, obj);
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  let instrumentPageLoad;
  let obj = require(dependencyMap[3]);
  const result = obj.browserTracingIntegration(Object.assign({}, instrumentNavigation, { isArray: null, scales: null }));
  const require = result;
  ({ history: closure_1, routes: closure_2, matchPath: closure_3, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {
    afterAllSetup(arg0) {
      result.afterAllSetup(arg0);
      callback(arg0, closure_4, callback, closure_1, "reactrouter_v5", closure_2, closure_3);
    }
  };
  return Object.assign({}, result, obj);
};
export const withSentryRouting = function withSentryRouting(displayName) {
  const require = displayName;
  class WrappedRoute {
    constructor(arg0) {
      if (null != displayName) {
        computedMatch = displayName.computedMatch;
        if (null != computedMatch) {
          if (computedMatch.isExact) {
            path = displayName.computedMatch.path;
            tmp = displayName;
            tmp2 = closure_1;
            num = 4;
            obj = displayName(closure_1[4]);
            activeSpan = obj.getActiveSpan();
            rootSpan = activeSpan;
            if (activeSpan) {
              tmp5 = displayName;
              tmp6 = closure_1;
              obj2 = displayName(closure_1[4]);
              rootSpan = obj2.getRootSpan(activeSpan);
            }
            tmp7 = undefined;
            if (rootSpan) {
              tmp8 = displayName;
              tmp9 = closure_1;
              obj3 = displayName(closure_1[4]);
              op = obj3.spanToJSON(rootSpan).op;
              str = "navigation";
              if ("navigation" === op) {
                tmp10 = rootSpan;
              } else {
                str2 = "pageload";
              }
              tmp7 = tmp10;
            }
            tmp11 = displayName;
            tmp12 = closure_1;
            obj4 = displayName(closure_1[4]);
            currentScope = obj4.getCurrentScope();
            setTransactionNameResult = currentScope.setTransactionName(path);
            if (tmp7) {
              updateNameResult = tmp7.updateName(path);
              tmp15 = displayName;
              tmp16 = closure_1;
              str3 = "route";
              attr = tmp7.setAttribute(displayName(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
            }
          }
        }
      }
      return closure_4.createElement(displayName, Object.assign({}, displayName));
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + displayName.displayName || displayName.name + ")";
  require(dependencyMap[5]).hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};
