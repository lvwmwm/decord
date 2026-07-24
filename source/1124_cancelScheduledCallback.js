// Module ID: 1124
// Function ID: 12764
// Name: cancelScheduledCallback
// Dependencies: [5, 77, 57, 65, 31, 1000, 1125, 1126, 794, 1118, 1116]
// Exports: createReactRouterV6CompatibleTracingIntegration, createV6CompatibleWithSentryReactRouterRouting, createV6CompatibleWrapCreateBrowserRouter, createV6CompatibleWrapCreateMemoryRouter, createV6CompatibleWrapUseRoutes

// Module 1124 (cancelScheduledCallback)
import asyncGeneratorStep from "keys";
import _defineProperty from "_defineProperty";
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";
import result from "result";

function cancelScheduledCallback(closure_0) {
  const WINDOW = require(1000) /* keys */.WINDOW;
  if (null != WINDOW) {
    if (WINDOW.cancelAnimationFrame) {
      const WINDOW2 = require(1000) /* keys */.WINDOW;
      WINDOW2.cancelAnimationFrame(closure_0);
    }
  }
  clearTimeout(closure_0);
}
function computeLocationKey(_location) {
  let pathname;
  let search;
  ({ search, pathname } = _location);
  if (!search) {
    search = "";
  }
  return "" + pathname + search + _location.hash || "";
}
function isParameterizedRoute(routeName) {
  let hasItem = routeName.includes(":");
  if (!hasItem) {
    hasItem = routeName.includes("*");
  }
  return hasItem;
}
function shouldSkipNavigation(locationKey, arg1, routeName) {
  if (locationKey) {
    if (locationKey.locationKey === arg1) {
      let result = !tmp3;
      if (!!locationKey.routeName) {
        let obj = require(1125) /* pickSplat */;
        result = obj.transactionNameHasWildcard(locationKey.routeName);
      }
      const result1 = require(1125) /* pickSplat */.transactionNameHasWildcard(routeName);
      let tmp11 = !tmp10;
      if (!!locationKey.routeName) {
        tmp11 = isParameterizedRoute(locationKey.routeName);
      }
      const obj2 = require(1125) /* pickSplat */;
      if (result) {
        result = !result1;
      }
      const tmp14 = isParameterizedRoute(routeName);
      let tmp16 = routeName !== locationKey.routeName;
      if (tmp16) {
        routeName = locationKey.routeName;
        let num3;
        if (null != routeName) {
          num3 = routeName.length;
        }
        if (!num3) {
          num3 = 0;
        }
        tmp16 = routeName.length > num3;
      }
      if (tmp16) {
        tmp16 = !result1;
      }
      obj = { skip: true };
      let tmp18 = !locationKey.routeName;
      if (!tmp18) {
        if (!result) {
          result = tmp15;
        }
        if (!result) {
          result = tmp16;
        }
        tmp18 = !result;
      }
      obj.shouldUpdate = !tmp18;
      return obj;
    }
    return { skip: false, shouldUpdate: false };
  } else {
    return { skip: false, shouldUpdate: false };
  }
}
function addResolvedRoutesToParent(arr, children) {
  let tmp = children.children || [];
  const require = tmp;
  const found = arr.filter((arg0) => !arg0.some((path) => {
    let tmp = path === user;
    if (!tmp) {
      path = user.path;
      if (path) {
        path = path.path === user.path;
      }
      tmp = path;
    }
    if (!tmp) {
      let id = user.id;
      if (id) {
        id = path.id === user.id;
      }
      tmp = id;
    }
    return tmp;
  }));
  if (found.length > 0) {
    const items = [];
    children.children = items.concat(_toConsumableArray(tmp), _toConsumableArray(found));
    const tmp3 = _toConsumableArray(tmp);
  }
}
function processResolvedRoutes(arr, children) {
  let tmp = null;
  if (arguments.length > 2) {
    tmp = null;
    if (undefined !== arguments[2]) {
      tmp = arguments[2];
    }
  }
  let tmp2;
  if (arguments.length > 3) {
    tmp2 = arguments[3];
  }
  const item = arr.forEach((item10042) => {
    outer1_16.add(item10042);
    if (outer1_12) {
      const result = outer1_0(outer1_1[7]).checkRouteForAsyncHandler(item10042, outer1_23);
      const obj = outer1_0(outer1_1[7]);
    }
  });
  if (children) {
    addResolvedRoutesToParent(arr, children);
  }
  let activeRootSpan = tmp2;
  if (null == tmp2) {
    let obj = require(1125) /* pickSplat */;
    activeRootSpan = obj.getActiveRootSpan();
  }
  if (activeRootSpan) {
    let obj1 = require(794) /* registerSpanErrorInstrumentation */;
    const spanToJSONResult = obj1.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (require(1118).DEBUG_BUILD) {
        const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp12 = tmp;
      if (!tmp) {
        tmp12 = tmp;
        if (!tmp2) {
          tmp12 = tmp;
          if (undefined !== require(1000) /* keys */.WINDOW) {
            const _location = require(1000) /* keys */.WINDOW.location;
            tmp12 = tmp;
            if (tmp17) {
              obj = { pathname: _location.pathname };
              tmp12 = obj;
            }
            tmp17 = null != _location && _location.pathname;
          }
        }
      }
      if (tmp12) {
        if ("pageload" === op) {
          obj = { activeRootSpan };
          obj1 = { pathname: tmp12.pathname };
          obj.location = obj1;
          const _Array = Array;
          obj.routes = Array.from(set);
          const _Array2 = Array;
          obj.allRoutes = Array.from(set);
          updatePageloadTransaction(obj);
        } else if ("navigation" === op) {
          const _Array3 = Array;
          updateNavigationSpan(activeRootSpan, tmp12, Array.from(set), false, closure_10);
        }
      }
    }
  }
}
function updateNavigationSpan(activeRootSpan, _location, arg2, arg3, closure_10) {
  if (arguments.length > 4) {
    const tmp2 = arguments[4];
  }
  const spanToJSONResult = require(794) /* registerSpanErrorInstrumentation */.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (null != activeRootSpan) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (description) {
    result = require(1125) /* pickSplat */.transactionNameHasWildcard(description);
    const obj2 = require(1125) /* pickSplat */;
  }
  if (!spanToJSONResult.timestamp) {
    const tmp2Result = tmp2(arg2, _location);
    const obj3 = require(1125) /* pickSplat */;
    let items = tmp2Result;
    if (!tmp2Result) {
      items = [];
    }
    const tmp17 = _slicedToArray(obj3.resolveRouteNameAndSource(_location, arg2, arg2, items, ""), 2);
    const first = tmp17[0];
    const data = spanToJSONResult.data;
    if (null != data) {
      const tmp20 = data[require(undefined, 794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    let tmp23 = first;
    if (first) {
      let tmp24 = !description;
      if (!tmp24) {
        let tmp25 = !prop;
        if (tmp25) {
          tmp25 = "route" !== tmp20 || "route" === tmp19;
          const tmp26 = "route" !== tmp20 || "route" === tmp19;
        }
        tmp24 = tmp25;
      }
      if (!tmp24) {
        tmp24 = "route" !== tmp20 && "route" === tmp19;
        const tmp27 = "route" !== tmp20 && "route" === tmp19;
      }
      if (!tmp24) {
        tmp24 = "route" === tmp20 && "route" === tmp19 && result;
        const tmp28 = "route" === tmp20 && "route" === tmp19 && result;
      }
      tmp23 = tmp24;
    }
    if (tmp23) {
      activeRootSpan.updateName(first);
      const attr = activeRootSpan.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp19);
      let result1 = require(1125) /* pickSplat */.transactionNameHasWildcard(first);
      if (!result1) {
        result1 = "route" !== tmp19;
      }
      if (!result1) {
        const result2 = require(794) /* registerSpanErrorInstrumentation */.addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
        const obj5 = require(794) /* registerSpanErrorInstrumentation */;
      }
      const obj4 = require(1125) /* pickSplat */;
    }
  }
}
function setupRouterSubscription(subscribe) {
  const _require = arg1;
  let dependencyMap = arg2;
  let closure_2 = arg3;
  let c3 = false;
  let tmp2 = !tmp;
  if (!!arg4) {
    tmp2 = "pageload" === _require(794).spanToJSON(arg4).op;
    let obj = _require(794);
  }
  const _slicedToArray = tmp2;
  let c5 = false;
  let c6 = null;
  let c7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    const callback = historyAction;
    if (!c3) {
      const activeRootSpan = callback(1125).getActiveRootSpan();
      if (activeRootSpan) {
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          let c4 = true;
        }
        obj2 = callback(794);
      }
      if (c4) {
        if ("POP" === historyAction.historyAction) {
          if (!c5) {
            c5 = true;
          }
        }
        c3 = true;
      }
      let obj = callback(1125);
    }
    if ("PUSH" === historyAction.historyAction) {
      const tmp9 = outer1_19(historyAction.location);
      const dependencyMap = tmp9;
      function navigationHandler() {
        if (c7 !== closure_1) {
          c7 = closure_1;
          let c6 = null;
          const obj = { location: historyAction.location, routes: historyAction, navigationType: historyAction.historyAction, version: closure_1, basename: outer1_2 };
          const _Array = Array;
          obj.allRoutes = Array.from(outer2_16);
          outer2_27(obj);
        }
      }
      if ("idle" !== historyAction.navigation.state) {
        if (c7 !== tmp9) {
          c7 = null;
        }
        if (null !== c6) {
          outer1_18(c6);
        }
        const WINDOW = callback(1000).WINDOW;
        if (null == WINDOW) {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(navigationHandler, 0);
          c6 = timerId;
        }
        const WINDOW2 = callback(1000).WINDOW;
        timerId = WINDOW2.requestAnimationFrame(navigationHandler);
      } else {
        if (null !== c6) {
          outer1_18(c6);
          c6 = null;
        }
        navigationHandler();
      }
    }
  });
}
function wrapPatchRoutesOnNavigation(arg0) {
  let obj = arg0;
  let closure_0 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  if (obj) {
    if ("patchRoutesOnNavigation" in obj) {
      if ("function" === typeof obj.patchRoutesOnNavigation) {
        const patchRoutesOnNavigation = obj.patchRoutesOnNavigation;
        const _Object = Object;
        obj = {};
        let closure_1 = patchRoutesOnNavigation(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            const callback = arg0;
            let path;
            let activeRootSpan;
            let patch;
            path = undefined;
            if (null != arg0) {
              path = arg0.path;
            }
            activeRootSpan = callback(table[6]).getActiveRootSpan();
            if (!outer1_0) {
              patch = undefined;
              if (null != arg0) {
                patch = arg0.patch;
              }
              if (patch) {
                arg0.patch = (arg0, arg1) => {
                  outer3_28(arg1);
                  let obj = path(path2[6]);
                  const activeRootSpan = obj.getActiveRootSpan();
                  let tmp3 = path;
                  if (path) {
                    tmp3 = activeRootSpan;
                  }
                  if (tmp3) {
                    tmp3 = "navigation" === path(path2[8]).spanToJSON(activeRootSpan).op;
                    const obj2 = path(path2[8]);
                  }
                  if (tmp3) {
                    obj = { pathname: path, search: "", hash: "", state: null, key: "default" };
                    const _Array = Array;
                    outer3_24(activeRootSpan, obj, Array.from(outer3_16), true, outer3_10);
                  }
                  return patch(arg0, arg1);
                };
              }
            }
            let tmp9 = patchRoutesOnNavigation(async () => {
              let obj = callback(1125);
              const setNavigationContextResult = obj.setNavigationContext(outer1_1, outer1_2);
              const tmp2 = yield outer3_2(outer1_0);
              const result = callback(1125).clearNavigationContext(setNavigationContextResult);
              const obj2 = callback(1125);
              const activeRootSpan = callback(1125).getActiveRootSpan();
              if (activeRootSpan) {
                if ("navigation" === obj4.spanToJSON(tmp5).op) {
                  if (outer3_0) {
                    let tmp9 = tmp25;
                  } else {
                    tmp9 = tmp25;
                    if (!tmp25) {
                      const _location = callback(1000).WINDOW.location;
                      let pathname;
                      if (null != _location) {
                        pathname = _location.pathname;
                      }
                      tmp9 = pathname;
                    }
                  }
                  if (tmp9) {
                    obj = { pathname: tmp9, search: "", hash: "", state: null, key: "default" };
                    const _Array = Array;
                    outer4_24(activeRootSpan, obj, Array.from(outer4_16), false, outer4_10);
                  }
                }
                obj4 = callback(794);
              }
              return tmp2;
            })();
            if (activeRootSpan) {
              (function trackLazyRouteLoad(activeRootSpan, promise) {
                let closure_0 = activeRootSpan;
                let closure_1 = promise;
                let value = outer3_17.get(activeRootSpan);
                if (!value) {
                  const _Set = Set;
                  const set = new Set();
                  const result = outer3_17.set(activeRootSpan, set);
                  value = set;
                }
                value.add(promise);
                promise.finally(() => {
                  const value = outer4_17.get(closure_0);
                  if (value) {
                    value.delete(closure_1);
                  }
                });
              })(activeRootSpan, tmp9);
            }
            return tmp9;
          }
        });
        obj.patchRoutesOnNavigation = function patchRoutesOnNavigation(arg0) {
          return callback(...arguments);
        };
        return Object.assign({}, obj, obj);
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  return obj;
}
function handleNavigation(arg0) {
  let _location;
  let allRoutes;
  let basename;
  let matches;
  let navigationType;
  let routes;
  let version;
  ({ location: _location, routes, navigationType, version, matches, basename, allRoutes } = arg0);
  let logResult = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    if (!allRoutes) {
      tmp3 = routes;
    }
    logResult = closure_10(tmp3, _location, basename);
    const tmp2 = closure_10;
  }
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  if (client) {
    if (weakSet.has(tmp7)) {
      let obj1 = require(1125) /* pickSplat */;
      const activeRootSpan = obj1.getActiveRootSpan();
      if (activeRootSpan) {
        let obj2 = require(794) /* registerSpanErrorInstrumentation */;
      }
      if ("PUSH" === navigationType) {
        if (logResult) {
          const obj4 = require(1125) /* pickSplat */;
          let tmp18 = allRoutes;
          if (!allRoutes) {
            tmp18 = routes;
          }
          let tmp19 = allRoutes;
          if (!allRoutes) {
            tmp19 = routes;
          }
          const tmp27 = _slicedToArray(obj4.resolveRouteNameAndSource(_location, tmp18, tmp19, logResult, basename), 2);
          const first = tmp27[0];
          const tmp33 = computeLocationKey(_location);
          const value = weakMap.get(tmp7);
          let isPlaceholder = !value;
          if (!isPlaceholder) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (timestamp) {
            timestamp = require(794) /* registerSpanErrorInstrumentation */.spanToJSON(value.span).timestamp;
            const obj5 = require(794) /* registerSpanErrorInstrumentation */;
          }
          const tmp38Result = shouldSkipNavigation(value, tmp33, first, timestamp);
          if (tmp38Result.skip) {
            if (tmp38Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp29;
                  if (require(1118).DEBUG_BUILD) {
                    const debug3 = require(794) /* registerSpanErrorInstrumentation */.debug;
                    const _HermesInternal4 = HermesInternal;
                    logResult = routeName;
                    logResult = debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp29 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp29);
                  const span2 = value.span;
                  const attr = span2.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30);
                  const result = require(794) /* registerSpanErrorInstrumentation */.addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp29;
                  if (require(1118).DEBUG_BUILD) {
                    const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp29 + "\"");
                  }
                  const obj12 = require(794) /* registerSpanErrorInstrumentation */;
                }
              }
            }
            if (require(1118).DEBUG_BUILD) {
              const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp34);
            }
          } else {
            obj = {};
            obj = {
              end() {

                        }
            };
            obj.span = obj;
            obj.routeName = tmp29;
            obj.pathname = _location.pathname;
            obj.locationKey = tmp34;
            obj.isPlaceholder = true;
            const result1 = weakMap.set(tmp7, obj);
            obj1 = { name: obj.routeName };
            const obj8 = require(1000) /* keys */;
            const tmp60 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30);
            const _HermesInternal = HermesInternal;
            obj1.attributes = _defineProperty(_defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.reactrouter_v" + version);
            const result2 = obj8.startBrowserTracingNavigationSpan(tmp7, obj1);
            if (result2) {
              obj2 = { span: result2, routeName: obj.routeName, pathname: _location.pathname, locationKey: tmp34 };
              const result3 = obj10.set(tmp7, obj2);
              patchSpanEnd(result2, _location, routes, basename, allRoutes, "navigation");
            } else {
              obj10.delete(tmp7);
            }
            const tmp61 = _defineProperty(_defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30), require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
          }
          const tmp17 = _location;
          const tmp38 = shouldSkipNavigation;
        }
      }
    }
  }
}
function addRoutesToAllRoutes(arr) {
  let item = arr.forEach((arg0) => {
    const item = outer1_29(arg0).forEach((arg0) => {
      outer2_16.add(arg0);
    });
  });
}
function getChildRoutesRecursively(children) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let set = arguments[1];
    }
    if (!set.has(children)) {
      set.add(children);
      if (tmp2) {
        children = children.children;
        let item = children.forEach((arg0) => {
          const item = outer1_29(arg0, set).forEach((arg0) => {
            outer1_0.add(arg0);
          });
        });
      }
      tmp2 = children.children && !children.index;
    }
    return set;
  }
  set = new Set();
}
function updatePageloadTransaction(arg0) {
  let _location;
  let activeRootSpan;
  let allRoutes;
  let basename;
  let matches;
  let routes;
  ({ activeRootSpan, location: _location, routes, matches, basename, allRoutes } = arg0);
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = closure_10(tmp3, _location, basename);
    const tmp2 = closure_10;
  }
  if (tmp) {
    const obj = require(1125) /* pickSplat */;
    let tmp6 = allRoutes;
    if (!allRoutes) {
      tmp6 = routes;
    }
    let tmp7 = allRoutes;
    if (!allRoutes) {
      tmp7 = routes;
    }
    const tmp15 = _slicedToArray(obj.resolveRouteNameAndSource(_location, tmp6, tmp7, tmp, basename), 2);
    const first = tmp15[0];
    const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
    let str = first;
    if (!first) {
      str = "/";
    }
    currentScope.setTransactionName(str);
    if (activeRootSpan) {
      activeRootSpan.updateName(first);
      const attr = activeRootSpan.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp15[1]);
      patchSpanEnd(activeRootSpan, _location, routes, basename, allRoutes, "pageload");
    }
    const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
}
function tryUpdateSpanNameBeforeEnd(updateName, data, description, _location, arg4, basename) {
  data = data.data;
  let tmp2;
  if (null != data) {
    tmp2 = tmp[require(undefined, 794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  }
  if ("route" === tmp2) {
    if (description) {
      let obj = require(1125) /* pickSplat */;
    }
  }
  const arr = Array.from(arg7);
  const tmp11 = arr.length > 0 ? arr : arg4;
  const tmp13 = callback(tmp11, _location, basename);
  if (tmp13) {
    let obj2 = require(1125) /* pickSplat */;
    const tmp24 = _slicedToArray(obj2.resolveRouteNameAndSource(_location, tmp12, tmp12, tmp14, basename), 2);
    const first = tmp24[0];
    const tmp33 = (function shouldUpdateWildcardSpanName(description, arg1, first, arg3, arg4) {
      let tmp2 = !tmp;
      if (!!first) {
        let tmp3 = description;
        if (!description) {
          tmp3 = !(arguments.length > 4 && undefined !== arguments[4] && arguments[4]);
          const tmp4 = arguments.length > 4 && undefined !== arguments[4] && arguments[4];
        }
        let tmp5 = !tmp3;
        if (!tmp5) {
          let result = !description;
          if (!result) {
            result = !outer1_0(outer1_1[6]).transactionNameHasWildcard(description);
            const obj = outer1_0(outer1_1[6]);
          }
          if (!result) {
            result = "route" !== arg3;
          }
          if (!result) {
            result = outer1_0(outer1_1[6]).transactionNameHasWildcard(first);
            const obj2 = outer1_0(outer1_1[6]);
          }
          tmp5 = !result;
        }
        if (!tmp5) {
          tmp5 = "route" !== arg1 && "route" === arg3;
          const tmp12 = "route" !== arg1 && "route" === arg3;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    })(description, tmp2, first, tmp24[1], true);
    let tmp36 = tmp35;
    if ("pageload" !== arg6) {
      tmp36 = !data.timestamp;
    }
    let tmp38 = tmp33;
    if (tmp33) {
      tmp38 = tmp36;
    }
    if (tmp38) {
      updateName.updateName(first);
      const attr = updateName.setAttribute(require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp27);
    }
  }
}
function patchSpanEnd(activeRootSpan, _location, routes, basename, allRoutes, navigation) {
  const _require = activeRootSpan;
  const dependencyMap = _location;
  let closure_2 = routes;
  let closure_3 = basename;
  let closure_4 = navigation;
  let obj = globalThis;
  const combined = "__sentry_" + navigation + "_end_patched__";
  let tmp2;
  if (null != activeRootSpan) {
    tmp2 = activeRootSpan[combined];
  }
  if (!tmp2) {
    if (activeRootSpan.end) {
      if (allRoutes) {
        let _Set = obj.Set;
        let prototype = _Set.prototype;
        _Set = new _Set(allRoutes);
      } else {
        _Set = set;
      }
      const end = activeRootSpan.end;
      let closure_6 = end.bind(activeRootSpan);
      let c7 = false;
      activeRootSpan.end = function patchedEnd() {
        let data;
        let description;
        if (!c7) {
          c7 = true;
          if (arguments.length > 0) {
            let first;
            if (arguments.length > 0) {
              first = arguments[0];
            }
            let result = first;
          } else {
            const _Date = Date;
            result = Date.now() / 1000;
          }
          const activeRootSpan = result;
          let spanToJSONResult = activeRootSpan(794).spanToJSON(activeRootSpan);
          ({ description, data } = spanToJSONResult);
          if (null != data) {
            const tmp9 = data[activeRootSpan(undefined, 794).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          function cleanupNavigationSpan() {
            const client = callback(794).getClient();
            if (client) {
              if ("navigation" === outer1_4) {
                const value = outer2_15.get(client);
                let tmp5 = value;
                if (value) {
                  tmp5 = value.span === result;
                }
                if (tmp5) {
                  outer2_15.delete(client);
                }
              }
            }
          }
          let value = outer1_17.get(activeRootSpan);
          if (value) {
            if (value.size > 0) {
              if (description) {
                if (0 === outer1_13) {
                  outer1_31(activeRootSpan, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, _Set);
                  const result1 = cleanupNavigationSpan();
                  callback(result);
                } else {
                  const nextPromise = Promise.allSettled(value).then(() => {

                  });
                  let racePromise = nextPromise;
                  if (outer1_13 !== Infinity) {
                    const items = [nextPromise, ];
                    const promise = new Promise((arg0) => setTimeout(arg0, outer2_13));
                    items[1] = promise;
                    racePromise = Promise.race(items);
                  }
                  const allSettledResult = Promise.allSettled(value);
                  racePromise.then(() => {
                    const spanToJSONResult = callback(794).spanToJSON(result);
                    outer2_31(result, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, outer1_2, outer1_3, outer1_4, outer1_5);
                    cleanupNavigationSpan();
                    outer1_6(callback);
                  }).catch(() => {
                    cleanupNavigationSpan();
                    outer1_6(closure_0);
                  });
                  const nextPromise1 = racePromise.then(() => {
                    const spanToJSONResult = callback(794).spanToJSON(result);
                    outer2_31(result, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, outer1_2, outer1_3, outer1_4, outer1_5);
                    cleanupNavigationSpan();
                    outer1_6(callback);
                  });
                }
                const obj2 = activeRootSpan(1125);
              }
            }
          }
          outer1_31(activeRootSpan, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, _Set);
          const result2 = cleanupNavigationSpan();
          callback(result);
          const obj = activeRootSpan(794);
        }
      };
      obj = _require(794);
      let result = obj.addNonEnumerableProperty(activeRootSpan, combined, true);
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c12 = false;
let c13 = 3000;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
let set = new Set();
const weakMap1 = new WeakMap();

export { addResolvedRoutesToParent };
export { addRoutesToAllRoutes };
export const allRoutes = set;
export { computeLocationKey };
export const createReactRouterV6CompatibleTracingIntegration = function createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, _6) {
  let _defineProperty;
  let _slicedToArray;
  let _toConsumableArray;
  let closure_6;
  let closure_7;
  let closure_8;
  let enableAsyncRouteHandlers;
  const _require = instrumentPageLoad;
  const dependencyMap = _6;
  let obj = _require(1000);
  let result = obj.browserTracingIntegration(Object.assign({}, instrumentPageLoad, { instrumentPageLoad: false, instrumentNavigation: false }));
  const asyncGeneratorStep = result;
  ({ useEffect: _defineProperty, useLocation: _slicedToArray, useNavigationType: _toConsumableArray, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  let closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  let closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  let closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  let lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  obj = {
    setup(arg0) {
      closure_2.setup(arg0);
      const finalTimeout = instrumentPageLoad.finalTimeout;
      let num = 30000;
      if (null != finalTimeout) {
        num = finalTimeout;
      }
      const idleTimeout = instrumentPageLoad.idleTimeout;
      let num2 = 1000;
      if (null != idleTimeout) {
        num2 = idleTimeout;
      }
      const result = 3 * num2;
      let tmp3 = result;
      if (null != lazyRouteTimeout) {
        tmp3 = lazyRouteTimeout;
      }
      if (tmp3 === Infinity) {
        let outer1_13 = num;
        if (instrumentPageLoad(1118).DEBUG_BUILD) {
          const debug3 = instrumentPageLoad(794).debug;
          debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
        }
      } else {
        const _Number = Number;
        if (Number.isNaN(tmp3)) {
          if (instrumentPageLoad(1118).DEBUG_BUILD) {
            const debug2 = instrumentPageLoad(794).debug;
            debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", result);
          }
          outer1_13 = result;
        } else if (tmp3 < 0) {
          if (instrumentPageLoad(1118).DEBUG_BUILD) {
            const debug = instrumentPageLoad(794).debug;
            debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp3, "falling back to:", result);
          }
          outer1_13 = result;
        } else {
          outer1_13 = tmp3;
        }
      }
      const outer1_6 = closure_3;
      const outer1_7 = closure_4;
      const outer1_8 = closure_5;
      let closure_10 = closure_7;
      let closure_9 = closure_6;
      lazyRouteTimeout = closure_9;
      let flag = closure_8;
      if (!closure_8) {
        flag = false;
      }
      const result1 = instrumentPageLoad(1125).initializeRouterUtils(closure_7, flag);
    },
    afterAllSetup(closure_0) {
      closure_2.afterAllSetup(closure_0);
      const _location = instrumentPageLoad(1000).WINDOW.location;
      if (null != _location) {
        const pathname = _location.pathname;
      }
      let tmp2 = closure_10;
      if (closure_10) {
        tmp2 = pathname;
      }
      if (tmp2) {
        let obj = instrumentPageLoad(1000);
        obj = { name: pathname };
        const tmp6 = outer1_3({}, instrumentPageLoad(794).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url");
        const _HermesInternal = HermesInternal;
        obj.attributes = outer1_3(outer1_3(outer1_3({}, instrumentPageLoad(794).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), instrumentPageLoad(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), instrumentPageLoad(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.reactrouter_v" + dependencyMap);
        const result = obj.startBrowserTracingPageLoadSpan(closure_0, obj);
        const tmp7 = outer1_3(outer1_3({}, instrumentPageLoad(794).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), instrumentPageLoad(794).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
      }
      if (closure_11) {
        outer1_14.add(closure_0);
      }
    }
  };
  return Object.assign({}, result, obj);
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_9) {
          if (closure_10) {
            class SentryRoutes {
              constructor(arg0) {
                closure_0 = arg0;
                c1 = outer1_11.useRef(true);
                tmp = outer1_7();
                closure_2 = tmp;
                tmp2 = outer1_8();
                closure_3 = tmp2;
                items = [, ];
                items[0] = tmp;
                items[1] = tmp2;
                tmp3 = outer1_6(() => {
                  const tmp = outer2_9(lib.children);
                  if (ref.current) {
                    outer2_28(tmp);
                    let obj = { activeRootSpan: lib(ref[6]).getActiveRootSpan(), location: closure_2, routes: tmp };
                    const _Array2 = Array;
                    obj.allRoutes = Array.from(outer2_16);
                    outer2_30(obj);
                    ref.current = false;
                    const obj3 = lib(ref[6]);
                  } else {
                    obj = { location: closure_2, routes: tmp, navigationType: closure_3, version: ref };
                    const _Array = Array;
                    obj.allRoutes = Array.from(outer2_16);
                    outer2_27(obj);
                  }
                }, items);
                return outer1_11.createElement(closure_0, Object.assign({}, arg0));
              }
            }
            _require(1116).hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (_require(1118).DEBUG_BUILD) {
    class SentryRoutes {
      constructor(arg0) {
        closure_0 = arg0;
        c1 = outer1_11.useRef(true);
        tmp = outer1_7();
        closure_2 = tmp;
        tmp2 = outer1_8();
        closure_3 = tmp2;
        items = [, ];
        items[0] = tmp;
        items[1] = tmp2;
        tmp3 = outer1_6(() => {
          const tmp = outer2_9(lib.children);
          if (ref.current) {
            outer2_28(tmp);
            let obj = { activeRootSpan: lib(ref[6]).getActiveRootSpan(), location: closure_2, routes: tmp };
            const _Array2 = Array;
            obj.allRoutes = Array.from(outer2_16);
            outer2_30(obj);
            ref.current = false;
            const obj3 = lib(ref[6]);
          } else {
            obj = { location: closure_2, routes: tmp, navigationType: closure_3, version: ref };
            const _Array = Array;
            obj.allRoutes = Array.from(outer2_16);
            outer2_27(obj);
          }
        }, items);
        return outer1_11.createElement(closure_0, Object.assign({}, arg0));
      }
    }
    const debug = _require(794).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: " + closure_6 + ". useLocation: " + closure_7 + ". useNavigationType: " + closure_8 + ".\n      createRoutesFromChildren: " + closure_9 + ". matchRoutes: " + closure_10 + ".");
  }
  return arg0;
};
export const createV6CompatibleWrapCreateBrowserRouter = function createV6CompatibleWrapCreateBrowserRouter(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_10) {
          let fn = (routes, basename) => {
            outer1_28(routes);
            if (outer1_12) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let tmp6 = callback;
                let tmp7 = dependencyMap;
                let obj = callback(1126);
                let tmp8 = outer1_23;
                let result = obj.checkRouteForAsyncHandler(tmp4, outer1_23);
                continue;
              }
            }
            const tmp10 = callback(routes, outer1_26(basename));
            basename = undefined;
            if (null != basename) {
              basename = basename.basename;
            }
            const activeRootSpan = callback(1125).getActiveRootSpan();
            if (tmp13) {
              obj = { activeRootSpan, location: tmp10.state.location, routes, basename };
              const _Array = Array;
              obj.allRoutes = Array.from(outer1_16);
              outer1_30(obj);
            }
            outer1_25(tmp10, routes, dependencyMap, basename, activeRootSpan);
            return tmp10;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (_require(1118).DEBUG_BUILD) {
    const debug = _require(794).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_10) {
          let fn = (routes, basename) => {
            outer1_28(routes);
            if (outer1_12) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let tmp6 = callback;
                let tmp7 = dependencyMap;
                let obj = callback(1126);
                let tmp8 = outer1_23;
                let result = obj.checkRouteForAsyncHandler(tmp4, outer1_23);
                continue;
              }
            }
            const tmp10 = callback(routes, outer1_26(basename, true));
            basename = undefined;
            if (null != basename) {
              basename = basename.basename;
            }
            let initialEntries;
            if (null != basename) {
              initialEntries = basename.initialEntries;
            }
            let initialIndex;
            if (null != basename) {
              initialIndex = basename.initialIndex;
            }
            let tmp14 = initialEntries;
            if (initialEntries) {
              tmp14 = 1 === initialEntries.length;
            }
            if (tmp14) {
              let first = initialEntries[0];
            } else if (tmp15) {
              first = initialEntries[initialIndex];
            }
            if (first) {
              let tmp17 = first;
              if ("string" === typeof first) {
                obj = { pathname: first };
                tmp17 = obj;
              }
              let _location = tmp17;
            } else {
              _location = tmp10.state.location;
            }
            const activeRootSpan = callback(1125).getActiveRootSpan();
            if (tmp19) {
              obj = { activeRootSpan, location: _location, routes, basename };
              const _Array = Array;
              obj.allRoutes = Array.from(outer1_16);
              outer1_30(obj);
            }
            outer1_25(tmp10, routes, dependencyMap, basename, activeRootSpan);
            return tmp10;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (_require(1118).DEBUG_BUILD) {
    const debug = _require(794).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_10) {
          function SentryRoutes(routes) {
            const callback = outer1_11.useRef(true);
            routes = routes.routes;
            const locationArg = routes.locationArg;
            const tmp2 = outer1_7();
            const tmp3 = outer1_8();
            const SentryRoutes = tmp3;
            if ("string" === typeof locationArg) {
              let tmp5 = locationArg;
            } else {
              tmp5 = tmp2;
              if (null != locationArg) {
                tmp5 = tmp2;
              }
            }
            let closure_3 = tmp5;
            const items = [tmp3, tmp5];
            outer1_6(() => {
              if ("string" === typeof closure_3) {
                let obj = { pathname: closure_3 };
                let tmp = obj;
              } else {
                tmp = closure_3;
              }
              if (ref.current) {
                outer2_28(routes);
                obj = { activeRootSpan: ref(table[6]).getActiveRootSpan(), location: tmp, routes };
                const _Array2 = Array;
                obj.allRoutes = Array.from(outer2_16);
                outer2_30(obj);
                ref.current = false;
                const obj4 = ref(table[6]);
              } else {
                obj = { location: tmp, routes, navigationType: closure_2, version: routes };
                const _Array = Array;
                obj.allRoutes = Array.from(outer2_16);
                outer2_27(obj);
              }
            }, items);
            return callback(routes, locationArg);
          }
          return (routes, locationArg) => <SentryRoutes routes={arg0} locationArg={arg1} />;
        }
      }
    }
  }
  if (_require(1118).DEBUG_BUILD) {
    const debug = _require(794).debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };
