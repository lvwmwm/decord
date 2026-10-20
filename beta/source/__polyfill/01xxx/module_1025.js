// Module ID: 1025
// Function ID: 1026
// Dependencies: [5, 32, 19, 901, 1026, 1027, 693, 1019, 1017]
// Exports: addResolvedRoutesToParent, createReactRouterV6CompatibleTracingIntegration, createV6CompatibleWithSentryReactRouterRouting, createV6CompatibleWrapCreateBrowserRouter, createV6CompatibleWrapCreateMemoryRouter, createV6CompatibleWrapUseRoutes

// Module 1025
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;
import _mod1019 from "module_1019" /* 1019 */;
import _mod1026 from "module_1026" /* 1026 */;
import _mod1027 from "module_1027" /* 1027 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, c2, closure_4, closure_5, closure_6, closure_7, closure_8, createElement, dependencyMap;

const f85649 = (item) => {
  closure_0 = item;
  return !closure_0.some((path) => {
    let tmp2 = path === user;
    if (!tmp2) {
      tmp2 = user.path && path.path === user.path;
    }
    if (!tmp2) {
      tmp2 = user.id && path.id === user.id;
    }
    return tmp2;
  });
};
const f85657 = (children) => {
  const f85658 = function(children) {
    if (set === undefined) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    if (!set.has(children)) {
      set.add(children);
      const tmp3 = children.children && !children.index;
      if (tmp3) {
        children = children.children;
        const item = children.forEach(f85658);
      }
    }
    const item1 = set.forEach((item) => {
      set.add(item);
    });
  };
  set = new Set();
  if (!set.has(children)) {
    const addResult = set.add(children);
    const tmp2 = children.children && !children.index;
    if (tmp2) {
      children = children.children;
      let item = children.forEach(f85658);
    }
  }
  let item1 = set.forEach((item) => {
    set.add(item);
  });
};
function computeLocationKey(_location) {
  let pathname;
  let search;
  ({ search, pathname } = _location);
  if (!search) {
    search = "";
  }
  const tmp = _location.hash || "";
  return "" + pathname + search + tmp;
}
function shouldSkipNavigation(locationKey, arg1, arr, arg3) {
  const tmp = locationKey;
  if (tmp) {
    if (locationKey.locationKey === arg1) {
      let result = locationKey.routeName;
      if (result) {
        const obj = _mod1026;
        result = obj.transactionNameHasWildcard(locationKey.routeName);
      }
      const obj2 = _mod1026;
      const result1 = obj2.transactionNameHasWildcard(arr);
      let routeName3 = locationKey.routeName;
      if (routeName3) {
        const routeName = locationKey.routeName;
        const hasItem = routeName.includes(":") || routeName.includes("*");
        routeName3 = hasItem;
      }
      const hasItem1 = arr.includes(":") || arr.includes("*");
      if (result) {
        result = !result1;
      }
      let tmp15 = arr !== locationKey.routeName;
      const tmp14 = !routeName3 && hasItem1;
      if (tmp15) {
        const routeName1 = locationKey.routeName;
        num = undefined;
        const length = arr.length;
        if (routeName1 != null) {
          num = routeName1.length;
        }
        if (!num) {
          num = 0;
        }
        tmp15 = length > num;
      }
      if (tmp15) {
        tmp15 = !result1;
      }
      const routeName2 = locationKey.routeName;
      let tmp17 = !routeName2;
      if (routeName2) {
        if (!result) {
          result = tmp14;
        }
        if (!result) {
          result = tmp15;
        }
        tmp17 = !result;
      }
      return { skip: true, shouldUpdate: !tmp17 };
    }
    return { skip: false, shouldUpdate: false };
  } else {
    return { skip: false, shouldUpdate: false };
  }
}
function trackLazyRouteLoad(arg0, promise) {
  let closure_0 = arg0;
  let closure_1 = promise;
  let value = weakMap1.get(arg0);
  const obj = weakMap1;
  if (!value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const result = obj.set(arg0, set);
    value = set;
  }
  value.add(promise);
  promise.finally(() => {
    const value = weakMap1.get(closure_0);
    if (value) {
      value.delete(promise);
    }
  });
}
function createDeferredLazyRoutePromise(activeRootSpan) {
  const promise = new Promise((arg0) => {
    const result = weakMap2.set(activeRootSpan, arg0);
  });
  let closure_0 = activeRootSpan;
  let value = weakMap1.get(activeRootSpan);
  const obj = weakMap1;
  if (!value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    let result = obj.set(activeRootSpan, set);
    value = set;
  }
  value.add(promise);
  promise.finally(() => {
    const value = weakMap1.get(closure_0);
    if (value) {
      value.delete(promise);
    }
  });
}
function processResolvedRoutes(arr, children, arg2, activeRootSpan) {
  let obj5;
  let tmp2 = arg2;
  if (arg2 === undefined) {
    tmp2 = null;
  }
  const item = arr.forEach((item) => {
    set.add(item);
    const tmp2 = closure_1_10;
    if (tmp2) {
      const obj = require("module_1027");
      const result = obj.checkRouteForAsyncHandler(item, processResolvedRoutes);
    }
  });
  if (children) {
    const tmp4 = children.children || [];
    let closure_0 = tmp4;
    const found = arr.filter(f85649);
    if (found.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, tmp4, 0));
      children.children = items;
    }
  }
  if (activeRootSpan == null) {
    let obj = _mod1026;
    activeRootSpan = obj.getActiveRootSpan();
  }
  if (activeRootSpan) {
    const obj2 = _mod693;
    const spanToJSONResult = obj2.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (_mod1019.DEBUG_BUILD) {
        const debug = tmp13(693).debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp16 = tmp2;
      if (!tmp16) {
        tmp16 = tmp2;
        if (!activeRootSpan) {
          tmp16 = tmp2;
          if (undefined !== feedbackAsyncIntegration.WINDOW) {
            const _location = tmp13(901).WINDOW.location;
            let pathname;
            if (_location != null) {
              pathname = _location.pathname;
            }
            tmp16 = tmp2;
            if (pathname) {
              tmp16 = { pathname: _location.pathname };
              const obj3 = { pathname: _location.pathname };
            }
          }
        }
      }
      if (tmp16) {
        if ("pageload" === op) {
          const obj4 = { activeRootSpan, location: obj5, routes: Array.from(set), allRoutes: Array.from(set) };
          const _Array = Array;
          const _Array2 = Array;
          obj5 = { pathname: tmp16.pathname };
          updatePageloadTransaction(obj4);
        } else if ("navigation" === op) {
          const _Array3 = Array;
          updateNavigationSpan(activeRootSpan, tmp16, Array.from(set), false, closure_8);
        }
      }
    }
  }
}
function updateNavigationSpan(activeRootSpan, _location, routes) {
  let tmp18;
  let tmp19;
  const obj = _mod693;
  const spanToJSONResult = obj.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (activeRootSpan != null) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (result) {
    const tmpResult = _mod1026;
    result = tmpResult.transactionNameHasWildcard(description);
  }
  if (!spanToJSONResult.timestamp) {
    let tmp20;
    const tmp9 = fn(routes, _location);
    let items = tmp9;
    const resolveRouteNameAndSource = _mod1026.resolveRouteNameAndSource;
    const tmpResult4 = _mod1026;
    if (!tmp9) {
      items = [];
    }
    [tmp18, tmp19] = resolveRouteNameAndSource(_location, routes, routes, items, "");
    const data = spanToJSONResult.data;
    _slicedToArray(resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
    if (data != null) {
      tmp20 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    let tmp21 = tmp18;
    if (tmp21) {
      let tmp22 = !description;
      if (description) {
        let tmp23 = !prop;
        if (tmp23) {
          tmp23 = "route" !== tmp20 || "route" === tmp19;
        }
        tmp22 = tmp23;
      }
      if (!tmp22) {
        tmp22 = "route" !== tmp20 && "route" === tmp19;
      }
      if (!tmp22) {
        tmp22 = "route" === tmp20 && "route" === tmp19 && result;
      }
      tmp21 = tmp22;
    }
    if (tmp21) {
      activeRootSpan.updateName(tmp18);
      const attr = activeRootSpan.setAttribute(tmp(693).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp19);
      const tmpResult5 = _mod1026;
      const result1 = tmpResult5.transactionNameHasWildcard(tmp18) || "route" !== tmp19;
      if (!result1) {
        const tmpResult6 = _mod693;
        const result2 = tmpResult6.addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
      }
    }
  }
}
function setupRouterSubscription(subscribe, routes, arg2, basename, activeRootSpan) {
  let closure_1;
  _require = routes;
  dependencyMap = arg2;
  let c3 = false;
  let tmp = activeRootSpan;
  if (tmp) {
    let obj = require("module_693");
    tmp = "pageload" === obj.spanToJSON(activeRootSpan).op;
  }
  closure_4 = tmp;
  let c5 = false;
  let c6 = null;
  closure_7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    let pathname;
    let search;
    routes = historyAction;
    const tmp = c3;
    if (!tmp) {
      let c4;
      let obj = routes(version[4]);
      const activeRootSpan = obj.getActiveRootSpan();
      if (activeRootSpan) {
        const obj2 = routes(version[6]);
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          c4 = true;
        }
      }
      const tmp7 = c4;
      if (tmp7) {
        if ("POP" === historyAction.historyAction) {
          const tmp8 = c5;
          if (!tmp8) {
            c5 = true;
          }
        }
        c3 = true;
      }
    }
    if ("PUSH" === historyAction.historyAction) {
      const _location = historyAction.location;
      ({ search, pathname } = _location);
      if (!search) {
        search = "";
      }
      const _HermesInternal = HermesInternal;
      const tmp9 = _location.hash || "";
      let combined = "" + pathname + search + tmp9;
      if ("idle" !== historyAction.navigation.state) {
        let animationFrame;
        if (combined !== combined) {
          combined = null;
        }
        if (null !== c6) {
          const WINDOW3 = routes(version[3]).WINDOW;
          let _cancelAnimationFrame;
          const tmp22 = routes;
          const tmp23 = version;
          if (WINDOW3 != null) {
            _cancelAnimationFrame = WINDOW3.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame) {
            const WINDOW4 = tmp22(tmp23[3]).WINDOW;
            WINDOW4.cancelAnimationFrame(c6);
          } else {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(c6);
          }
        }
        const WINDOW5 = routes(version[3]).WINDOW;
        let prop;
        if (WINDOW5 != null) {
          prop = WINDOW5.requestAnimationFrame;
        }
        function navigationHandler() {
          if (closure_7 !== combined) {
            closure_7 = combined;
            c6 = null;
            const _Array = Array;
            const obj = { location: routes.location, routes, navigationType: routes.historyAction, version, basename, allRoutes: Array.from(set) };
            handleNavigation(obj);
          }
        }
        if (prop) {
          const WINDOW6 = routes(version[3]).WINDOW;
          animationFrame = WINDOW6.requestAnimationFrame(navigationHandler);
        } else {
          const _setTimeout = setTimeout;
          animationFrame = setTimeout(navigationHandler, 0);
        }
        c6 = animationFrame;
      } else {
        if (null !== c6) {
          const WINDOW = routes(version[3]).WINDOW;
          let _cancelAnimationFrame1;
          const tmp12 = routes;
          const tmp13 = version;
          if (WINDOW != null) {
            _cancelAnimationFrame1 = WINDOW.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame1) {
            const WINDOW2 = tmp12(tmp13[3]).WINDOW;
            WINDOW2.cancelAnimationFrame(c6);
          } else {
            const _clearTimeout = clearTimeout;
            clearTimeout(c6);
          }
          c6 = null;
        }
        if (combined !== combined) {
          c6 = null;
          let _Array = Array;
          const obj3 = { location: historyAction.location, routes, navigationType: historyAction.historyAction, version: combined, basename, allRoutes: Array.from(set) };
          handleNavigation(obj3);
        }
      }
    }
  });
}
function wrapPatchRoutesOnNavigation(patchRoutesOnNavigation, arg1, activeRootSpan) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = patchRoutesOnNavigation;
  _asyncToGenerator = undefined;
  patchRoutesOnNavigation = undefined;
  if (patchRoutesOnNavigation) {
    let str = "patchRoutesOnNavigation";
    if ("patchRoutesOnNavigation" in obj) {
      if (typeof obj.patchRoutesOnNavigation === "function") {
        patchRoutesOnNavigation = obj.patchRoutesOnNavigation;
        let obj2 = {
          patchRoutesOnNavigation(arg0) {
                  return closure_2(...arguments);
                }
        };
        let tmp = obj2;
        let tmp2 = obj;
        const merged = Object.assign(obj);
        let tmp4 = _asyncToGenerator;
        _asyncToGenerator = _asyncToGenerator(async (arg0, value) => {
          let closure_1;
          let tmp2;
          let v3;
          let closure_0 = arg0;
          if (c2 === 2) {
            c2 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            let tmp18 = arg0;
            if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  const tmp20 = closure_0;
                  let path;
                  if (closure_0 != null) {
                    path = tmp20.path;
                  }
                  let tmp4 = closure_0;
                  let obj = closure_0(activeRootSpan[4]);
                  activeRootSpan = obj.getActiveRootSpan();
                  if (activeRootSpan == null) {
                    let tmp7 = activeRootSpan;
                  }
                  const tmp8 = activeRootSpan;
                  closure_2 = activeRootSpan;
                  const tmp9 = flag;
                  if (!tmp9) {
                    let patch;
                    if (tmp20 != null) {
                      patch = tmp20.patch;
                    }
                    let matches;
                    if (tmp20 != null) {
                      matches = tmp20.matches;
                    }
                    if (patch) {
                      tmp20.patch = (arg0, arr) => {
                        let spanToJSONResult;
                        closure_0 = arg0;
                        let item = arr.forEach(f85657);
                        if (matches) {
                          if (matches.length > 0) {
                            let route;
                            if (matches[matches.length - 1] != null) {
                              route = tmp26.route;
                            }
                            if (route) {
                              let tmp4 = globalThis;
                              const _Array = Array;
                              const arr2 = Array.from(closure_3_14);
                              const found = arr2.find((id) => {
                                let tmp = undefined !== id.id && id.id === closure_0;
                                const tmp4 = undefined !== id.path && undefined !== route.path && id.path === route.path;
                                if (!tmp) {
                                  tmp = id === tmp3;
                                }
                                if (!tmp) {
                                  tmp = tmp4;
                                }
                                return tmp;
                              });
                              if (found) {
                                const tmp7 = found.children || [];
                                closure_0 = tmp7;
                                const found1 = arr.filter(f85649);
                                if (found1.length > 0) {
                                  const items = [];
                                  HermesBuiltin.arraySpread(items, found1, HermesBuiltin.arraySpread(items, tmp7, 0));
                                  found.children = items;
                                }
                              }
                            }
                          }
                        }
                        if (closure_2) {
                          const obj = closure_0(path[6]);
                          spanToJSONResult = obj.spanToJSON(closure_2);
                        }
                        const tmp18 = path && tmp13 && spanToJSONResult && !spanToJSONResult.timestamp && "navigation" === spanToJSONResult.op;
                        if (tmp18) {
                          const _Array2 = Array;
                          const obj2 = { pathname: path, search: "", hash: "", state: null, key: "default" };
                          closure_3_22(closure_2, obj2, Array.from(closure_3_14), true, closure_3_8);
                        }
                        return patch(arg0, arr);
                      };
                    }
                  }
                  const tmp13 = c2(function*(arg0, value) {
                    let v0;
                    function resolveDeferredLazyRoutePromise(__sentry_may_have_lazy_routes__) {
                      const value = closure_1_16.get(__sentry_may_have_lazy_routes__);
                      const obj = closure_1_16;
                      if (value) {
                        value();
                        obj.delete(__sentry_may_have_lazy_routes__);
                        if (__sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__) {
                          __sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__ = false;
                        }
                      }
                    }
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      let tmp54;
                      try {
                        let navigationContext;
                        let result1;
                        c5 = 2;
                        if (0 === c4) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_0 = undefined;
                            tmp54 = undefined;
                            const obj7 = closure_0(path[4]);
                            navigationContext = obj7.setNavigationContext(path, closure_2);
                            patch = 1;
                            result1 = patch(closure_0);
                            c4 = 2;
                            c5 = 1;
                            const obj5 = { value: result1, done: false };
                            return obj5;
                          }
                        } else if (1 === tmp4) {
                          patch = 0;
                          const obj6 = closure_0(path[4]);
                          const result = obj6.clearNavigationContext(navigationContext);
                          result1 = closure_129_2;
                          const tmp39 = closure_2;
                          if (result1) {
                            result1 = resolveDeferredLazyRoutePromise(closure_129_2);
                          }
                          throw tmp39;
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          patch = 0;
                          const obj4 = closure_0(path[4]);
                          result1 = obj4.clearNavigationContext(navigationContext);
                          const tmp33 = closure_129_2;
                          if (tmp33) {
                            result1 = closure_129_2;
                            resolveDeferredLazyRoutePromise(closure_129_2);
                          }
                          c5 = 3;
                          const obj8 = { value, done: true };
                          return obj8;
                        } else {
                          closure_0 = value;
                          patch = 0;
                          const obj11 = closure_0(path[4]);
                          result1 = obj11.clearNavigationContext(navigationContext);
                          const tmp66 = closure_129_2;
                          if (tmp66) {
                            result1 = closure_129_2;
                            resolveDeferredLazyRoutePromise(closure_129_2);
                          }
                          result1 = closure_129_2;
                          let spanToJSONResult;
                          if (closure_129_2) {
                            let obj = closure_0(path[6]);
                            spanToJSONResult = obj.spanToJSON(closure_129_2);
                          }
                          tmp54 = spanToJSONResult;
                          let tmp15 = closure_129_2 && tmp54 && !tmp54.timestamp && "navigation" === tmp54.op;
                          if (tmp15) {
                            result1 = navigationContext;
                            tmp15 = closure_129_1;
                          }
                          if (tmp15) {
                            const obj9 = { pathname: closure_129_1, search: "", hash: "", state: null, key: "default" };
                            const _Array = Array;
                            result1 = closure_2_14;
                            flag = false;
                            closure_2_22(closure_129_2, obj9, Array.from(closure_2_14), false, closure_2_8);
                          }
                          result1 = closure_0;
                          c5 = 3;
                          const obj10 = { value: result1, done: true };
                          return obj10;
                        }
                      } catch (tmp54) {
                        closure_2 = tmp54;
                        if (0 === patch) {
                          c5 = 3;
                          throw tmp54;
                        } else {
                          c4 = 1;
                        }
                      }
                    }
                  })();
                  if (tmp8) {
                    let tmp15 = trackLazyRouteLoad(tmp8, tmp13);
                  }
                  c2 = 3;
                  let obj4 = { value: tmp13, done: true };
                  return obj4;
                }
              } catch (tmp16) {
                c2 = 3;
                throw tmp16;
              }
            }
          }
        });
        return obj2;
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  return obj;
}
function handleNavigation(version) {
  let _location;
  let allRoutes;
  let basename;
  let matches;
  let navigationType;
  let obj3;
  let obj6;
  let routes;
  let tmp19;
  let tmp20;
  ({ location: _location, routes, navigationType, matches, basename, allRoutes } = version);
  version = version.version;
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    const tmp2 = closure_8;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = tmp2(tmp3, _location, basename);
  }
  const obj = _mod693;
  const client = obj.getClient();
  if (client) {
    if (weakSet.has(client)) {
      const tmp4Result = _mod1026;
      const activeRootSpan = tmp4Result.getActiveRootSpan();
      if (activeRootSpan) {
        _mod693;
      }
      if ("PUSH" === navigationType) {
        if (tmp) {
          let tmp10 = allRoutes;
          const resolveRouteNameAndSource = _mod1026.resolveRouteNameAndSource;
          const tmp4Result7 = _mod1026;
          if (!allRoutes) {
            tmp10 = routes;
          }
          if (!allRoutes) {
            allRoutes = routes;
          }
          [tmp19, tmp20] = resolveRouteNameAndSource(_location, tmp10, allRoutes, tmp, basename);
          _slicedToArray(resolveRouteNameAndSource(_location, tmp10, allRoutes, tmp, basename), 2);
          const tmp22 = computeLocationKey(_location);
          const value = weakMap.get(client);
          let isPlaceholder = !value;
          const tmp24 = shouldSkipNavigation;
          if (value) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (timestamp) {
            const tmp4Result8 = _mod693;
            timestamp = tmp4Result8.spanToJSON(value.span).timestamp;
          }
          const tmp24Result = tmp24(value, tmp22, tmp19, timestamp);
          if (tmp24Result.skip) {
            if (tmp24Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp19;
                  if (_mod1019.DEBUG_BUILD) {
                    const debug3 = tmp4(693).debug;
                    const _HermesInternal4 = HermesInternal;
                    debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp19 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp19);
                  const span2 = value.span;
                  const attr = span2.setAttribute(tmp4(693).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp20);
                  const tmp4Result9 = _mod693;
                  const result = tmp4Result9.addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp19;
                  if (_mod1019.DEBUG_BUILD) {
                    const debug2 = tmp4(693).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp19 + "\"");
                  }
                }
              }
            }
            if (_mod1019.DEBUG_BUILD) {
              const debug = tmp4(693).debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp22);
            }
          } else {
            const obj2 = { span: obj3, routeName: tmp19, pathname: _location.pathname, locationKey: tmp22, isPlaceholder: true };
            obj3 = {
              end() {

                        }
            };
            const result1 = obj4.set(client, obj2);
            try {
              const obj5 = { name: obj2.routeName, attributes: obj6 };
              obj6 = {};
              const startBrowserTracingNavigationSpan = feedbackAsyncIntegration.startBrowserTracingNavigationSpan;
              obj6[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp20;
              obj6[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              const _HermesInternal = HermesInternal;
              feedbackAsyncIntegration;
              obj6[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.reactrouter_v" + version;
              const result2 = startBrowserTracingNavigationSpan(client, obj5);
              const tmp34 = result2;
              if (tmp34) {
                const obj7 = { span: result2, routeName: obj2.routeName, pathname: _location.pathname, locationKey: tmp22 };
                const result3 = obj4.set(client, obj7);
                patchSpanEnd(result2, _location, routes, basename, "navigation");
              } else {
                weakMap.delete(client);
              }
            } catch (tmp43) {
              weakMap.delete(client);
              throw tmp43;
            }
          }
        }
      }
    }
  }
}
function addRoutesToAllRoutes(arr) {
  const item = arr.forEach(f85657);
}
function updatePageloadTransaction(arg0) {
  let _location;
  let activeRootSpan;
  let allRoutes;
  let basename;
  let matches;
  let routes;
  let tmp22;
  let tmp23;
  ({ activeRootSpan, location: _location, routes, matches, basename, allRoutes } = arg0);
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    const tmp2 = closure_8;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = tmp2(tmp3, _location, basename);
  }
  if (tmp) {
    let tmp13 = allRoutes;
    const resolveRouteNameAndSource = activeRootSpan(_location[4]).resolveRouteNameAndSource;
    const tmp12 = activeRootSpan(_location[4]);
    if (!allRoutes) {
      tmp13 = routes;
    }
    if (!allRoutes) {
      allRoutes = routes;
    }
    [tmp22, tmp23] = basename(resolveRouteNameAndSource(_location, tmp13, allRoutes, tmp, basename), 2);
    basename(resolveRouteNameAndSource(_location, tmp13, allRoutes, tmp, basename), 2);
    const tmp10Result = activeRootSpan(_location[6]);
    const currentScope = tmp10Result.getCurrentScope();
    let str4 = tmp22;
    const setTransactionName = currentScope.setTransactionName;
    if (!tmp22) {
      str4 = "/";
    }
    setTransactionName(str4);
    if (activeRootSpan) {
      activeRootSpan.updateName(tmp22);
      const attr = activeRootSpan.setAttribute(tmp10(tmp11[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp23);
      let pageload = "pageload";
      closure_5 = undefined;
      let c6;
      const _HermesInternal2 = HermesInternal;
      const combined = "__sentry_" + "pageload" + "_end_patched__";
      let tmp30;
      if (activeRootSpan != null) {
        tmp30 = activeRootSpan[combined];
      }
      if (!tmp30) {
        if (activeRootSpan.end) {
          const end2 = activeRootSpan.end;
          closure_5 = end2.bind(activeRootSpan);
          c6 = false;
          activeRootSpan.end = function patchedEnd() {
            let data;
            let description;
            const items = [...arguments];
            let first;
            let cleanupNavigationSpan;
            let tmp = c6;
            if (!tmp) {
              c6 = true;
              if (items.length > 0) {
                first = items[0];
              } else {
                const _Date = Date;
                first = Date.now() / 1000;
              }
              let tmp5 = _location;
              let obj = result2(_location[6]);
              let tmp6 = first;
              let spanToJSONResult = obj.spanToJSON(first);
              ({ description, data } = spanToJSONResult);
              if (data != null) {
                let tmp9 = data[tmp4(undefined, tmp5[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              }
              cleanupNavigationSpan = function cleanupNavigationSpan() {

              };
              let value = weakMap1.get(tmp6);
              if (!value) {
                tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                const tmp4Result = result2(tmp5[6]);
                let client = tmp4Result.getClient();
                const tmp16 = closure_4;
                if (client) {
                  if ("navigation" === tmp16) {
                    const value3 = weakMap.get(client);
                    const obj4 = weakMap;
                    const tmp25 = value3 && value3.span === tmp6;
                    if (tmp25) {
                      obj4.delete(client);
                    }
                  }
                }
                closure_5(first);
              }
              if (description) {
                const tmp4Result3 = result2(tmp5[4]);
                if (0 === num) {
                  tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                  const tmp4Result4 = result2(tmp5[6]);
                  const client1 = tmp4Result4.getClient();
                  const tmp38 = closure_4;
                  if (client1) {
                    if ("navigation" === tmp38) {
                      const value4 = weakMap.get(client1);
                      const obj6 = weakMap;
                      const tmp47 = value4 && value4.span === tmp6;
                      if (tmp47) {
                        obj6.delete(client1);
                      }
                    }
                  }
                  closure_5(first);
                } else {
                  const self = this;
                  const self2 = this;
                  const promise2 = new Promise((arg0) => setTimeout(arg0, closure_1_11));
                  let promise = promise2;
                  if (value) {
                    promise = promise2;
                    if (value.size > 0) {
                      const allSettledResult = Promise.allSettled(value);
                      const nextPromise = allSettledResult.then(() => {

                      });
                      let racePromise = nextPromise;
                      if (num !== Infinity) {
                        const items1 = [nextPromise, promise2];
                        racePromise = Promise.race(items1);
                      }
                      promise = racePromise;
                    }
                  }
                  const nextPromise1 = promise.then(() => {
                    const obj = _mod693;
                    const spanToJSONResult = obj.spanToJSON(result2);
                    tryUpdateSpanNameBeforeEnd(result2, spanToJSONResult, spanToJSONResult.description, _location, routes, basename, navigation, set);
                    const tmp3 = result2;
                    const tmp5 = navigation;
                    if (typeof cleanupNavigationSpan === "function") {
                      const tmpResult = _mod693;
                      const client = tmpResult.getClient();
                      if (client) {
                        if ("navigation" === tmp5) {
                          const value = weakMap.get(client);
                          const obj3 = weakMap;
                          const tmp9 = value && value.span === tmp3;
                          if (tmp9) {
                            obj3.delete(client);
                          }
                        }
                      }
                      closure_5(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  nextPromise1.catch(() => {
                    if (typeof cleanupNavigationSpan === "function") {
                      const obj = _mod693;
                      const client = obj.getClient();
                      if (client) {
                        if ("navigation" === navigation) {
                          const value = weakMap.get(client);
                          let tmp6 = value;
                          const obj2 = weakMap;
                          if (tmp6) {
                            tmp6 = value.span === result2;
                          }
                          if (tmp6) {
                            obj2.delete(client);
                          }
                        }
                      }
                      closure_5(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                }
              }
            }
          };
          const tmp10Result2 = activeRootSpan(_location[6]);
          const result = tmp10Result2.addNonEnumerableProperty(activeRootSpan, combined, true);
        }
      }
    }
  } else if (activeRootSpan) {
    pageload = "pageload";
    const _HermesInternal = HermesInternal;
    const combined1 = "__sentry_" + "pageload" + "_end_patched__";
    let tmp6;
    if (activeRootSpan != null) {
      tmp6 = activeRootSpan[combined1];
    }
    if (!tmp6) {
      if (activeRootSpan.end) {
        const end = activeRootSpan.end;
        closure_5 = end.bind(activeRootSpan);
        c6 = false;
        activeRootSpan.end = function patchedEnd() {
          let data;
          let description;
          const items = [...arguments];
          let first;
          let cleanupNavigationSpan;
          let tmp = c6;
          if (!tmp) {
            c6 = true;
            if (items.length > 0) {
              first = items[0];
            } else {
              const _Date = Date;
              first = Date.now() / 1000;
            }
            let tmp5 = _location;
            let obj = result2(_location[6]);
            let tmp6 = first;
            let spanToJSONResult = obj.spanToJSON(first);
            ({ description, data } = spanToJSONResult);
            if (data != null) {
              let tmp9 = data[tmp4(undefined, tmp5[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
            }
            cleanupNavigationSpan = function cleanupNavigationSpan() {

            };
            let value = weakMap1.get(tmp6);
            if (!value) {
              tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              const tmp4Result = result2(tmp5[6]);
              let client = tmp4Result.getClient();
              const tmp16 = closure_4;
              if (client) {
                if ("navigation" === tmp16) {
                  const value3 = weakMap.get(client);
                  const obj4 = weakMap;
                  const tmp25 = value3 && value3.span === tmp6;
                  if (tmp25) {
                    obj4.delete(client);
                  }
                }
              }
              closure_5(first);
            }
            if (description) {
              const tmp4Result3 = result2(tmp5[4]);
              if (0 === num) {
                tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                const tmp4Result4 = result2(tmp5[6]);
                const client1 = tmp4Result4.getClient();
                const tmp38 = closure_4;
                if (client1) {
                  if ("navigation" === tmp38) {
                    const value4 = weakMap.get(client1);
                    const obj6 = weakMap;
                    const tmp47 = value4 && value4.span === tmp6;
                    if (tmp47) {
                      obj6.delete(client1);
                    }
                  }
                }
                closure_5(first);
              } else {
                const self = this;
                const self2 = this;
                const promise2 = new Promise((arg0) => setTimeout(arg0, closure_1_11));
                let promise = promise2;
                if (value) {
                  promise = promise2;
                  if (value.size > 0) {
                    const allSettledResult = Promise.allSettled(value);
                    const nextPromise = allSettledResult.then(() => {

                    });
                    let racePromise = nextPromise;
                    if (num !== Infinity) {
                      const items1 = [nextPromise, promise2];
                      racePromise = Promise.race(items1);
                    }
                    promise = racePromise;
                  }
                }
                const nextPromise1 = promise.then(() => {
                  const obj = _mod693;
                  const spanToJSONResult = obj.spanToJSON(result2);
                  tryUpdateSpanNameBeforeEnd(result2, spanToJSONResult, spanToJSONResult.description, _location, routes, basename, navigation, set);
                  const tmp3 = result2;
                  const tmp5 = navigation;
                  if (typeof cleanupNavigationSpan === "function") {
                    const tmpResult = _mod693;
                    const client = tmpResult.getClient();
                    if (client) {
                      if ("navigation" === tmp5) {
                        const value = weakMap.get(client);
                        const obj3 = weakMap;
                        const tmp9 = value && value.span === tmp3;
                        if (tmp9) {
                          obj3.delete(client);
                        }
                      }
                    }
                    closure_5(first);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
                nextPromise1.catch(() => {
                  if (typeof cleanupNavigationSpan === "function") {
                    const obj = _mod693;
                    const client = obj.getClient();
                    if (client) {
                      if ("navigation" === navigation) {
                        const value = weakMap.get(client);
                        let tmp6 = value;
                        const obj2 = weakMap;
                        if (tmp6) {
                          tmp6 = value.span === result2;
                        }
                        if (tmp6) {
                          obj2.delete(client);
                        }
                      }
                    }
                    closure_5(first);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
              }
            }
          }
        };
        const obj = activeRootSpan(_location[6]);
        const result1 = obj.addNonEnumerableProperty(activeRootSpan, combined1, true);
      }
    }
  }
}
function tryUpdateSpanNameBeforeEnd(updateName, spanToJSONResult, description, _location, arg4, basename, arg6, set) {
  let first;
  function shouldUpdateWildcardSpanName(description, arg1, description2, arg3, arg4) {
    let flag = arg4;
    if (arg4 === undefined) {
      flag = false;
    }
    let tmp = description;
    if (tmp) {
      let tmp5 = !tmp3;
      if (description || !flag) {
        let result = !description;
        if (description) {
          const obj = require("module_1026");
          result = !obj.transactionNameHasWildcard(description);
        }
        if (!result) {
          result = "route" !== arg3;
        }
        if (!result) {
          const obj2 = require("module_1026");
          result = obj2.transactionNameHasWildcard(description);
        }
        tmp5 = !result;
      }
      if (!tmp5) {
        tmp5 = "route" !== arg1 && "route" === arg3;
      }
      tmp = tmp5;
    }
    return tmp;
  }
  try {
    let tmp = spanToJSONResult;
    const data = spanToJSONResult.data;
    let tmp3;
    if (data != null) {
      let tmp5 = require;
      tmp3 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    const tmp9 = tmp3;
    if ("route" === tmp3) {
      if (description) {
        let obj = _mod1026;
      }
    }
    let tmp14 = arg4;
    const _Array = Array;
    const arr = Array.from(set);
    if (arr.length > 0) {
      tmp14 = arr;
    }
    const tmp22 = closure_8(tmp14, _location, basename);
    if (tmp22) {
      let obj2 = _mod1026;
      [first] = obj2.resolveRouteNameAndSource(_location, tmp14, tmp14, tmp23, basename);
      let flag = true;
      let tmp45 = shouldUpdateWildcardSpanName(description, tmp9, first, tmp39, true);
      let tmp46 = "pageload" === arg6;
      const tmp26 = require;
      if (!tmp46) {
        tmp46 = !spanToJSONResult.timestamp;
      }
      if (tmp45) {
        tmp45 = tmp46;
      }
      if (tmp45) {
        updateName.updateName(first);
        const attr = updateName.setAttribute(tmp26(693).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp39);
      }
    }
  } catch (tmp53) {
    const tmp54 = require;
    if (_mod1019.DEBUG_BUILD) {
      const debug = tmp54(693).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("Error updating span details before ending: " + tmp53);
    }
  }
}
function patchSpanEnd(result2, _location, routes, basename, navigation) {
  _require = result2;
  dependencyMap = _location;
  let closure_2 = routes;
  let closure_3 = basename;
  closure_4 = navigation;
  const combined = "__sentry_" + navigation + "_end_patched__";
  let tmp2;
  if (result2 != null) {
    tmp2 = result2[combined];
  }
  if (!tmp2) {
    if (result2.end) {
      const end = result2.end;
      closure_5 = end.bind(result2);
      let c6 = false;
      result2.end = function patchedEnd() {
        let data;
        let description;
        const items = [...arguments];
        let first;
        let cleanupNavigationSpan;
        let tmp = c6;
        if (!tmp) {
          c6 = true;
          if (items.length > 0) {
            first = items[0];
          } else {
            const _Date = Date;
            first = Date.now() / 1000;
          }
          let tmp5 = _location;
          let obj = result2(_location[6]);
          let tmp6 = first;
          let spanToJSONResult = obj.spanToJSON(first);
          ({ description, data } = spanToJSONResult);
          if (data != null) {
            let tmp9 = data[tmp4(undefined, tmp5[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          cleanupNavigationSpan = function cleanupNavigationSpan() {

          };
          let value = weakMap1.get(tmp6);
          if (!value) {
            tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
            const tmp4Result = result2(tmp5[6]);
            let client = tmp4Result.getClient();
            const tmp16 = closure_4;
            if (client) {
              if ("navigation" === tmp16) {
                const value3 = weakMap.get(client);
                const obj4 = weakMap;
                const tmp25 = value3 && value3.span === tmp6;
                if (tmp25) {
                  obj4.delete(client);
                }
              }
            }
            closure_5(first);
          }
          if (description) {
            const tmp4Result3 = result2(tmp5[4]);
            if (0 === num) {
              tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              const tmp4Result4 = result2(tmp5[6]);
              const client1 = tmp4Result4.getClient();
              const tmp38 = closure_4;
              if (client1) {
                if ("navigation" === tmp38) {
                  const value4 = weakMap.get(client1);
                  const obj6 = weakMap;
                  const tmp47 = value4 && value4.span === tmp6;
                  if (tmp47) {
                    obj6.delete(client1);
                  }
                }
              }
              closure_5(first);
            } else {
              const self = this;
              const self2 = this;
              const promise2 = new Promise((arg0) => setTimeout(arg0, closure_1_11));
              let promise = promise2;
              if (value) {
                promise = promise2;
                if (value.size > 0) {
                  const allSettledResult = Promise.allSettled(value);
                  const nextPromise = allSettledResult.then(() => {

                  });
                  let racePromise = nextPromise;
                  if (num !== Infinity) {
                    const items1 = [nextPromise, promise2];
                    racePromise = Promise.race(items1);
                  }
                  promise = racePromise;
                }
              }
              const nextPromise1 = promise.then(() => {
                const obj = _mod693;
                const spanToJSONResult = obj.spanToJSON(result2);
                tryUpdateSpanNameBeforeEnd(result2, spanToJSONResult, spanToJSONResult.description, _location, routes, basename, navigation, set);
                const tmp3 = result2;
                const tmp5 = navigation;
                if (typeof cleanupNavigationSpan === "function") {
                  const tmpResult = _mod693;
                  const client = tmpResult.getClient();
                  if (client) {
                    if ("navigation" === tmp5) {
                      const value = weakMap.get(client);
                      const obj3 = weakMap;
                      const tmp9 = value && value.span === tmp3;
                      if (tmp9) {
                        obj3.delete(client);
                      }
                    }
                  }
                  closure_5(first);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              nextPromise1.catch(() => {
                if (typeof cleanupNavigationSpan === "function") {
                  const obj = _mod693;
                  const client = obj.getClient();
                  if (client) {
                    if ("navigation" === navigation) {
                      const value = weakMap.get(client);
                      let tmp6 = value;
                      const obj2 = weakMap;
                      if (tmp6) {
                        tmp6 = value.span === result2;
                      }
                      if (tmp6) {
                        obj2.delete(client);
                      }
                    }
                  }
                  closure_5(first);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            }
          }
        }
      };
      let tmp3 = _require;
      const tmp4 = dependencyMap;
      let obj = require("module_693");
      const result = obj.addNonEnumerableProperty(result2, combined, true);
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_10 = false;
let num = 3000;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
let set = new Set();
const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap();
const allRoutes_export = set;

export const addResolvedRoutesToParent = function addResolvedRoutesToParent(arr, children) {
  const tmp2 = children.children || [];
  let closure_0 = tmp2;
  const found = arr.filter(f85649);
  if (found.length > 0) {
    const items = [];
    HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, tmp2, 0));
    children.children = items;
  }
};
export { addRoutesToAllRoutes };
export { allRoutes_export as allRoutes };
export { computeLocationKey };
export const createReactRouterV6CompatibleTracingIntegration = function createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, _6) {
  let closure_1;
  let enableAsyncRouteHandlers;
  _require = instrumentPageLoad;
  dependencyMap = _6;
  let obj = { instrumentPageLoad: false, instrumentNavigation: false };
  const browserTracingIntegration = require("feedbackAsyncIntegration").browserTracingIntegration;
  require("feedbackAsyncIntegration");
  const merged = Object.assign(instrumentPageLoad);
  const result = browserTracingIntegration(obj);
  _asyncToGenerator = result;
  ({ useEffect: _slicedToArray, useLocation: closure_4, useNavigationType: closure_5, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  let closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  let closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  let obj2 = {
    setup(arg0) {
      _asyncToGenerator.setup(arg0);
      num = instrumentPageLoad.finalTimeout;
      const tmp2 = instrumentPageLoad;
      if (num == null) {
        num = 30000;
      }
      let num2 = tmp2.idleTimeout;
      if (num2 == null) {
        num2 = 1000;
      }
      _asyncToGenerator = 3 * num2;
      let tmp4 = lazyRouteTimeout;
      if (lazyRouteTimeout == null) {
        tmp4 = _asyncToGenerator;
      }
      if (tmp4 === Infinity) {
        if (_mod1019.DEBUG_BUILD) {
          const debug3 = _mod693.debug;
          debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
        }
      } else {
        const _Number = Number;
        if (Number.isNaN(tmp4)) {
          if (_mod1019.DEBUG_BUILD) {
            const debug2 = _mod693.debug;
            debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", _asyncToGenerator);
          }
          num = _asyncToGenerator;
        } else if (tmp4 < 0) {
          if (_mod1019.DEBUG_BUILD) {
            const debug = _mod693.debug;
            debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp4, "falling back to:", _asyncToGenerator);
          }
          num = _asyncToGenerator;
        } else {
          num = tmp4;
        }
      }
      closure_4 = _slicedToArray;
      closure_5 = closure_1_4;
      closure_6 = closure_1_5;
      closure_8 = closure_1_7;
      closure_7 = closure_1_6;
      closure_10 = closure_9;
      let flag = closure_1_8;
      const initializeRouterUtils = _mod1026.initializeRouterUtils;
      _mod1026;
      const tmp23 = closure_1_7;
      if (!closure_1_8) {
        flag = false;
      }
      const result1 = initializeRouterUtils(tmp23, flag);
    },
    afterAllSetup(f139057) {
      let obj2;
      _asyncToGenerator.afterAllSetup(f139057);
      const _location = feedbackAsyncIntegration.WINDOW.location;
      let pathname;
      if (_location != null) {
        pathname = _location.pathname;
      }
      const tmp5 = closure_10 && pathname;
      if (tmp5) {
        const obj = { name: pathname, attributes: obj2 };
        obj2 = {};
        const startBrowserTracingPageLoadSpan = feedbackAsyncIntegration.startBrowserTracingPageLoadSpan;
        obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
        obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
        const _HermesInternal = HermesInternal;
        feedbackAsyncIntegration;
        obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.reactrouter_v" + closure_1;
        _asyncToGenerator = startBrowserTracingPageLoadSpan(f139057, obj);
      }
      const tmp10 = closure_11;
      if (tmp10) {
        weakSet.add(f139057);
      }
    }
  };
  const merged1 = Object.assign(result);
  return obj2;
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, _6) {
  let closure_0;
  let closure_1;
  let obj;
  _require = arg0;
  dependencyMap = _6;
  let tmp = closure_4;
  if (tmp) {
    let tmp2 = closure_5;
    if (tmp2) {
      const tmp3 = closure_6;
      if (tmp3) {
        const tmp4 = closure_7;
        if (tmp4) {
          const tmp5 = closure_8;
          if (tmp5) {
            class SentryRoutes {
              constructor(arg0) {
                closure_0 = arg0;
                closure_1 = closure_1_9.useRef(true);
                tmp = closure_1_5();
                closure_2 = tmp;
                tmp2 = closure_1_6();
                closure_3 = tmp2;
                items = [, ];
                items[0] = tmp;
                items[1] = tmp2;
                tmp3 = closure_1_4(() => { /* body not rendered: F139070 */ }, items);
                obj = {};
                createElement = closure_1_9.createElement;
                merged = Object.assign(arg0);
                return createElement(closure_0, obj);
              }
            }
            let obj2 = require("module_1017");
            obj2.hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (require("module_1019").DEBUG_BUILD) {
    class SentryRoutes {
      constructor(arg0) {
        closure_0 = arg0;
        closure_1 = closure_1_9.useRef(true);
        tmp = closure_1_5();
        closure_2 = tmp;
        tmp2 = closure_1_6();
        closure_3 = tmp2;
        items = [, ];
        items[0] = tmp;
        items[1] = tmp2;
        tmp3 = closure_1_4(() => { /* body not rendered: F139070 */ }, items);
        obj = {};
        createElement = closure_1_9.createElement;
        merged = Object.assign(arg0);
        return createElement(closure_0, obj);
      }
    }
    const _HermesInternal = HermesInternal;
    obj.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: " + closure_4 + ". useLocation: " + closure_5 + ". useNavigationType: " + closure_6 + ".\n      createRoutesFromChildren: " + closure_7 + ". matchRoutes: " + closure_8 + ".");
  }
  return arg0;
};
export const createV6CompatibleWrapCreateBrowserRouter = function createV6CompatibleWrapCreateBrowserRouter(arg0, _6) {
  let closure_0;
  let closure_1;
  let fn;
  _require = arg0;
  dependencyMap = _6;
  const tmp = closure_4;
  if (tmp) {
    let tmp2 = closure_5;
    if (tmp2) {
      const tmp3 = closure_6;
      if (tmp3) {
        let tmp4 = closure_8;
        if (tmp4) {
          fn = (routes, patchRoutesOnNavigation) => {
            addRoutesToAllRoutes(routes);
            const tmp2 = closure_10;
            if (tmp2) {
              const tmp4 = routes[Symbol.iterator]();
              while (tmp4 !== undefined) {
                let obj = _mod1027;
                let result = obj.checkRouteForAsyncHandler(tmp6, processResolvedRoutes);
                continue;
              }
            }
            const obj2 = _mod1026;
            const activeRootSpan = obj2.getActiveRootSpan();
            let tmp17 = patchRoutesOnNavigation;
            if (tmp17) {
              tmp17 = "patchRoutesOnNavigation" in patchRoutesOnNavigation;
            }
            if (tmp17) {
              tmp17 = typeof patchRoutesOnNavigation.patchRoutesOnNavigation === "function";
            }
            if (tmp17) {
              tmp17 = activeRootSpan;
            }
            if (tmp17) {
              const tmp14Result = _mod693;
              const result1 = tmp14Result.addNonEnumerableProperty(activeRootSpan, "__sentry_may_have_lazy_routes__", true);
              createDeferredLazyRoutePromise(activeRootSpan);
            }
            const tmp21 = closure_0(routes, wrapPatchRoutesOnNavigation(patchRoutesOnNavigation, false, activeRootSpan));
            let basename;
            if (patchRoutesOnNavigation != null) {
              basename = patchRoutesOnNavigation.basename;
            }
            const tmp23 = "POP" === tmp21.state.historyAction && activeRootSpan;
            if (tmp23) {
              const _Array = Array;
              const obj3 = { activeRootSpan, location: tmp21.state.location, routes, basename, allRoutes: Array.from(set) };
              updatePageloadTransaction(obj3);
            }
            setupRouterSubscription(tmp21, routes, closure_1, basename, activeRootSpan);
            return tmp21;
          };
        }
        return fn;
      }
    }
  }
  const tmp6 = dependencyMap;
  fn = arg0;
  const tmp5 = _require;
  if (require("module_1019").DEBUG_BUILD) {
    const debug = tmp5(693).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  let closure_0;
  let closure_1;
  let fn;
  _require = arg0;
  dependencyMap = _6;
  const tmp = closure_4;
  if (tmp) {
    let tmp2 = closure_5;
    if (tmp2) {
      const tmp3 = closure_6;
      if (tmp3) {
        let tmp4 = closure_8;
        if (tmp4) {
          fn = (routes, patchRoutesOnNavigation) => {
            let _location;
            let first;
            addRoutesToAllRoutes(routes);
            const tmp2 = closure_10;
            if (tmp2) {
              const tmp4 = routes[Symbol.iterator]();
              while (tmp4 !== undefined) {
                let obj = _mod1027;
                let result = obj.checkRouteForAsyncHandler(tmp6, processResolvedRoutes);
                continue;
              }
            }
            const obj2 = _mod1026;
            const activeRootSpan = obj2.getActiveRootSpan();
            let tmp19 = patchRoutesOnNavigation;
            if (tmp19) {
              tmp19 = "patchRoutesOnNavigation" in patchRoutesOnNavigation;
            }
            if (tmp19) {
              tmp19 = typeof patchRoutesOnNavigation.patchRoutesOnNavigation === "function";
            }
            if (tmp19) {
              tmp19 = activeRootSpan;
            }
            if (tmp19) {
              const tmp15Result = _mod693;
              const result1 = tmp15Result.addNonEnumerableProperty(activeRootSpan, "__sentry_may_have_lazy_routes__", true);
              createDeferredLazyRoutePromise(activeRootSpan);
            }
            const tmp25 = closure_0(routes, wrapPatchRoutesOnNavigation(patchRoutesOnNavigation, true, activeRootSpan));
            let basename;
            if (patchRoutesOnNavigation != null) {
              basename = patchRoutesOnNavigation.basename;
            }
            let initialEntries;
            if (patchRoutesOnNavigation != null) {
              initialEntries = patchRoutesOnNavigation.initialEntries;
            }
            let initialIndex;
            if (patchRoutesOnNavigation != null) {
              initialIndex = patchRoutesOnNavigation.initialIndex;
            }
            const tmp29 = initialEntries && 1 === initialEntries.length;
            const tmp30 = undefined !== initialIndex && initialEntries && initialEntries[initialIndex];
            if (tmp29) {
              first = initialEntries[0];
            } else if (tmp30) {
              first = initialEntries[initialIndex];
            }
            if (first) {
              let tmp32 = first;
              if (typeof first === "string") {
                tmp32 = { pathname: first };
                const obj3 = { pathname: first };
              }
              _location = tmp32;
            } else {
              _location = tmp25.state.location;
            }
            const tmp14Result = _mod1026;
            const activeRootSpan1 = tmp14Result.getActiveRootSpan();
            const tmp34 = "POP" === tmp25.state.historyAction && activeRootSpan1;
            if (tmp34) {
              const _Array = Array;
              const obj4 = { activeRootSpan: activeRootSpan1, location: _location, routes, basename, allRoutes: Array.from(set) };
              updatePageloadTransaction(obj4);
            }
            setupRouterSubscription(tmp25, routes, closure_1, basename, activeRootSpan1);
            return tmp25;
          };
        }
        return fn;
      }
    }
  }
  const tmp6 = dependencyMap;
  fn = arg0;
  const tmp5 = _require;
  if (require("module_1019").DEBUG_BUILD) {
    const debug = tmp5(693).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, _6) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = _6;
  let tmp = closure_4;
  if (tmp) {
    let tmp2 = closure_5;
    if (tmp2) {
      let tmp3 = closure_6;
      if (tmp3) {
        const tmp4 = closure_8;
        if (tmp4) {
          function SentryRoutes(routes) {
            let version;
            const ref = React.useRef(true);
            routes = routes.routes;
            let locationArg = routes.locationArg;
            const tmp = ref(routes, locationArg);
            let tmp2 = closure_1_5();
            const tmp3 = closure_1_6();
            const navigationType = tmp3;
            if (typeof locationArg === "string") {
              tmp2 = locationArg;
            } else {
              let pathname;
              if (locationArg != null) {
                pathname = locationArg.pathname;
              }
            }
            locationArg = tmp2;
            const items = [tmp3, tmp2];
            closure_1_4(() => {
              let obj3;
              let tmp2 = locationArg;
              if (typeof locationArg === "string") {
                tmp2 = { pathname: tmp };
                const obj2 = { pathname: tmp };
              }
              if (ref.current) {
                const item = routes.forEach(f85657);
                const obj4 = { activeRootSpan: obj3.getActiveRootSpan(), location: tmp2, routes, allRoutes: Array.from(set) };
                const _Array2 = Array;
                obj3 = _mod1026;
                updatePageloadTransaction(obj4);
                tmp3.current = false;
              } else {
                const _Array = Array;
                const obj = { location: tmp2, routes, navigationType, version, allRoutes: Array.from(set) };
                handleNavigation(obj);
              }
            }, items);
            return tmp;
          }
          return (routes, locationArg) => <SentryRoutes routes={arg0} locationArg={arg1} />;
        }
      }
    }
  }
  const tmp5 = _require;
  if (require("module_1019").DEBUG_BUILD) {
    const debug = tmp5(693).debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };
