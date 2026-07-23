// Module ID: 1122
// Function ID: 12745
// Name: instrumentReactRouter
// Dependencies: [77, 57, 31, 1000, 794, 1116]
// Exports: reactRouterV4BrowserTracingIntegration, reactRouterV5BrowserTracingIntegration, withSentryRouting

// Module 1122 (instrumentReactRouter)
import _defineProperty from "_defineProperty";
import _slicedToArray from "_slicedToArray";
import result from "result";

function instrumentReactRouter(closure_0, arg1, arg2, location) {
  let tmp10;
  let tmp11;
  let listen = arg2;
  const _require = closure_0;
  const dependencyMap = arg4;
  function normalizeTransactionName(pathname) {
    if (0 !== lib.length) {
      if (closure_3) {
        const tmp4 = outer1_6(lib, pathname, closure_3);
        for (const item10012 of tmp4) {
          let tmp6 = item10012;
          if (item10012.match.isExact) {
            let items = [item10012.match.path, ];
            let str = "route";
            items[1] = "route";
            obj.return();
            return items;
          }
        }
        const items1 = [pathname, "url"];
        return items1;
      }
    }
    const items2 = [pathname, "url"];
    return items2;
  }
  if (arguments.length > 5) {
    const _defineProperty = [];
    let tmp2;
    if (arguments.length > 6) {
      tmp2 = arguments[6];
    }
    const _slicedToArray = tmp2;
    if (arg1) {
      if (location.location) {
        let pathname = location.location.pathname;
      } else if (_require(1000).WINDOW.location) {
        pathname = _require(1000).WINDOW.location.pathname;
      }
      if (pathname) {
        [tmp10, tmp11] = _slicedToArray(normalizeTransactionName(pathname), 2);
        let obj = _require(1000);
        obj = { name: tmp10 };
        const tmp9 = _slicedToArray(normalizeTransactionName(pathname), 2);
        let _HermesInternal = HermesInternal;
        const tmp15 = _defineProperty({}, _require(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
        obj.attributes = _defineProperty(_defineProperty(_defineProperty({}, _require(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), _require(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react." + arg4), _require(794).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp11);
        let result = obj.startBrowserTracingPageLoadSpan(closure_0, obj);
        const tmp17 = _defineProperty(_defineProperty({}, _require(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), _require(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react." + arg4);
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
            let obj = callback(1000);
            obj = { name: tmp5 };
            const tmp4 = pathname(normalizeTransactionName(pathname.pathname), 2);
            const _HermesInternal = HermesInternal;
            const tmp11 = lib({}, callback(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
            obj.attributes = lib(lib(lib({}, callback(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), callback(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react." + dependencyMap), callback(794).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp6);
            const result = obj.startBrowserTracingNavigationSpan(callback, obj);
            const tmp14 = lib(lib({}, callback(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), callback(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react." + dependencyMap);
          }
        }
      });
    }
  }
}
function matchRoutes(pathname, search, arg2) {
  let closure_0 = search;
  let closure_1 = arg2;
  if (arguments.length > 3) {
    if (undefined !== arguments[3]) {
      let items = arguments[3];
    }
    pathname.some((path) => {
      if (path.path) {
        let match = callback(closure_0, path);
      } else if (items.length) {
        match = items[items.length - 1].match;
      } else {
        match = { path: "/", url: "/", params: {}, isExact: "/" === closure_0 };
      }
      if (match) {
        const obj = { route: path, match };
        items.push(obj);
        if (path.routes) {
          outer1_6(path.routes, closure_0, callback, items);
        }
      }
      return match;
    });
    return items;
  }
  items = [];
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV4BrowserTracingIntegration = function reactRouterV4BrowserTracingIntegration(instrumentNavigation) {
  let _defineProperty;
  let _slicedToArray;
  let dependencyMap;
  let instrumentPageLoad;
  let obj = require(1000) /* keys */;
  const result = obj.browserTracingIntegration(Object.assign({}, instrumentNavigation, { instrumentPageLoad: false, instrumentNavigation: false }));
  require = result;
  ({ history: dependencyMap, routes: _defineProperty, matchPath: _slicedToArray, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {
    afterAllSetup(arg0) {
      closure_0.afterAllSetup(arg0);
      callback(arg0, closure_4, callback, closure_1, "reactrouter_v4", closure_2, closure_3);
    }
  };
  return Object.assign({}, result, obj);
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  let _defineProperty;
  let _slicedToArray;
  let dependencyMap;
  let instrumentPageLoad;
  let obj = require(1000) /* keys */;
  const result = obj.browserTracingIntegration(Object.assign({}, instrumentNavigation, { instrumentPageLoad: false, instrumentNavigation: false }));
  require = result;
  ({ history: dependencyMap, routes: _defineProperty, matchPath: _slicedToArray, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {
    afterAllSetup(arg0) {
      closure_0.afterAllSetup(arg0);
      callback(arg0, closure_4, callback, closure_1, "reactrouter_v5", closure_2, closure_3);
    }
  };
  return Object.assign({}, result, obj);
};
export const withSentryRouting = function withSentryRouting(displayName) {
  const _require = displayName;
  class WrappedRoute {
    constructor(arg0) {
      if (null != displayName) {
        computedMatch = displayName.computedMatch;
        if (null != computedMatch) {
          if (computedMatch.isExact) {
            path = displayName.computedMatch.path;
            tmp = closure_0;
            tmp2 = outer1_1;
            num = 4;
            obj = closure_0(outer1_1[4]);
            activeSpan = obj.getActiveSpan();
            rootSpan = activeSpan;
            if (activeSpan) {
              tmp5 = closure_0;
              tmp6 = outer1_1;
              obj2 = closure_0(outer1_1[4]);
              rootSpan = obj2.getRootSpan(activeSpan);
            }
            tmp7 = undefined;
            if (rootSpan) {
              tmp8 = closure_0;
              tmp9 = outer1_1;
              obj3 = closure_0(outer1_1[4]);
              op = obj3.spanToJSON(rootSpan).op;
              str = "navigation";
              if ("navigation" === op) {
                tmp10 = rootSpan;
              } else {
                str2 = "pageload";
              }
              tmp7 = tmp10;
            }
            tmp11 = closure_0;
            tmp12 = outer1_1;
            obj4 = closure_0(outer1_1[4]);
            currentScope = obj4.getCurrentScope();
            setTransactionNameResult = currentScope.setTransactionName(path);
            if (tmp7) {
              updateNameResult = tmp7.updateName(path);
              tmp15 = closure_0;
              tmp16 = outer1_1;
              str3 = "route";
              attr = tmp7.setAttribute(closure_0(outer1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
            }
          }
        }
      }
      return outer1_4.createElement(closure_0, Object.assign({}, displayName));
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + displayName.displayName || displayName.name + ")";
  _require(1116).hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};
