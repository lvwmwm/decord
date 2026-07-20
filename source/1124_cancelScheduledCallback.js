// Module ID: 1124
// Function ID: 12758
// Name: cancelScheduledCallback
// Dependencies: []
// Exports: createReactRouterV6CompatibleTracingIntegration, createV6CompatibleWithSentryReactRouterRouting, createV6CompatibleWrapCreateBrowserRouter, createV6CompatibleWrapCreateMemoryRouter, createV6CompatibleWrapUseRoutes

// Module 1124 (cancelScheduledCallback)
function cancelScheduledCallback(_animationFrame) {
  const WINDOW = require(dependencyMap[5]).WINDOW;
  if (null != WINDOW) {
    if (WINDOW.cancelAnimationFrame) {
      const WINDOW2 = require(dependencyMap[5]).WINDOW;
      WINDOW2.cancelAnimationFrame(_animationFrame);
    }
  }
  clearTimeout(_animationFrame);
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
        let obj = require(dependencyMap[6]);
        result = obj.transactionNameHasWildcard(locationKey.routeName);
      }
      const result1 = require(dependencyMap[6]).transactionNameHasWildcard(routeName);
      let tmp11 = !tmp10;
      if (!!locationKey.routeName) {
        tmp11 = isParameterizedRoute(locationKey.routeName);
      }
      const obj2 = require(dependencyMap[6]);
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
    return {};
  } else {
    return {};
  }
}
function addResolvedRoutesToParent(arr, children) {
  const tmp = children.children || [];
  const require = tmp;
  const found = arr.filter((arg0) => !arg0.some((path) => {
    let tmp = path === path;
    if (!tmp) {
      path = path.path;
      if (path) {
        path = path.path === path.path;
      }
      tmp = path;
    }
    if (!tmp) {
      let id = path.id;
      if (id) {
        id = path.id === path.id;
      }
      tmp = id;
    }
    return tmp;
  }));
  if (found.length > 0) {
    const items = [];
    children.children = items.concat(callback4(tmp), callback4(found));
    const tmp3 = callback4(tmp);
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
  const item = arr.forEach((handle) => {
    set.add(handle);
    if (closure_12) {
      const result = callback(closure_1[7]).checkRouteForAsyncHandler(handle, closure_23);
      const obj = callback(closure_1[7]);
    }
  });
  if (children) {
    addResolvedRoutesToParent(arr, children);
  }
  let activeRootSpan = tmp2;
  if (null == tmp2) {
    let obj = require(dependencyMap[6]);
    activeRootSpan = obj.getActiveRootSpan();
  }
  if (activeRootSpan) {
    let obj1 = require(dependencyMap[8]);
    const spanToJSONResult = obj1.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (require(dependencyMap[9]).DEBUG_BUILD) {
        const debug = require(dependencyMap[8]).debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp12 = tmp;
      if (!tmp) {
        tmp12 = tmp;
        if (!tmp2) {
          tmp12 = tmp;
          if (undefined !== require(dependencyMap[5]).WINDOW) {
            const _location = require(dependencyMap[5]).WINDOW.location;
            tmp12 = tmp;
            if (tmp17) {
              obj = { pathname: _location.pathname };
              tmp12 = obj;
            }
            const tmp17 = null != _location && _location.pathname;
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
  const spanToJSONResult = require(dependencyMap[8]).spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (null != activeRootSpan) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (description) {
    result = require(dependencyMap[6]).transactionNameHasWildcard(description);
    const obj2 = require(dependencyMap[6]);
  }
  if (!spanToJSONResult.timestamp) {
    const tmp2Result = tmp2(arg2, _location);
    const obj3 = require(dependencyMap[6]);
    let items = tmp2Result;
    if (!tmp2Result) {
      items = [];
    }
    const tmp17 = callback3(obj3.resolveRouteNameAndSource(_location, arg2, arg2, items, ""), 2);
    const first = tmp17[0];
    const data = spanToJSONResult.data;
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
      const attr = activeRootSpan.setAttribute(require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp19);
      let result1 = require(dependencyMap[6]).transactionNameHasWildcard(first);
      if (!result1) {
        result1 = "route" !== tmp19;
      }
      if (!result1) {
        const result2 = require(dependencyMap[8]).addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
        const obj5 = require(dependencyMap[8]);
      }
      const obj4 = require(dependencyMap[6]);
    }
  }
}
function setupRouterSubscription(subscribe) {
  const require = arg1;
  const dependencyMap = arg2;
  let closure_2 = arg3;
  let closure_3 = false;
  let tmp2 = !tmp;
  if (!!arg4) {
    tmp2 = "pageload" === require(dependencyMap[8]).spanToJSON(arg4).op;
    const obj = require(dependencyMap[8]);
  }
  let closure_4 = tmp2;
  let closure_5 = false;
  let closure_6 = null;
  let closure_7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    const arg1 = historyAction;
    if (!closure_3) {
      const activeRootSpan = arg1(arg2[6]).getActiveRootSpan();
      if (activeRootSpan) {
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          let closure_4 = true;
        }
        const obj2 = arg1(arg2[8]);
      }
      if (closure_4) {
        if ("POP" === historyAction.historyAction) {
          if (!closure_5) {
            closure_5 = true;
          }
        }
        closure_3 = true;
      }
      const obj = arg1(arg2[6]);
    }
    if ("PUSH" === historyAction.historyAction) {
      const tmp9 = callback2(historyAction.location);
      const arg2 = tmp9;
      function navigationHandler(self) {
        if (closure_7 !== tmp9) {
          closure_7 = tmp9;
          let closure_6 = null;
          const obj = { location: self.location, routes: self, navigationType: self.historyAction, version: tmp9, basename: closure_2 };
          const _Array = Array;
          obj.allRoutes = Array.from(closure_16);
          callback(obj);
        }
      }
      if ("idle" !== historyAction.navigation.state) {
        if (closure_7 !== tmp9) {
          closure_7 = null;
        }
        if (null !== closure_6) {
          callback(closure_6);
        }
        const WINDOW = arg1(arg2[5]).WINDOW;
        if (null == WINDOW) {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(navigationHandler, 0);
          closure_6 = timerId;
        }
        const WINDOW2 = arg1(arg2[5]).WINDOW;
        timerId = WINDOW2.requestAnimationFrame(navigationHandler);
      } else {
        if (null !== closure_6) {
          callback(closure_6);
          closure_6 = null;
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
        const callback = obj.patchRoutesOnNavigation;
        const _Object = Object;
        obj = {};
        let closure_1 = callback(async (arg0) => {
          if (obj) {
            return obj.resume();
          } else {
            let path;
            let activeRootSpan;
            let patch;
            path = undefined;
            if (null != arg0) {
              path = arg0.path;
            }
            activeRootSpan = arg0(path[6]).getActiveRootSpan();
            if (!arg0) {
              patch = undefined;
              if (null != arg0) {
                patch = arg0.patch;
              }
              if (patch) {
                arg0.patch = (arg0, arg1) => {
                  callback2(arg1);
                  let obj = arg0(path[6]);
                  const activeRootSpan = obj.getActiveRootSpan();
                  let tmp3 = path;
                  if (path) {
                    tmp3 = activeRootSpan;
                  }
                  if (tmp3) {
                    tmp3 = "navigation" === arg0(path[8]).spanToJSON(activeRootSpan).op;
                    const obj2 = arg0(path[8]);
                  }
                  if (tmp3) {
                    obj = { pathname: path };
                    const _Array = Array;
                    callback(activeRootSpan, obj, Array.from(closure_16), true, closure_10);
                  }
                  return patch(arg0, arg1);
                };
              }
            }
            const tmp9 = activeRootSpan(async () => {
              let obj = callback(closure_1[6]);
              const setNavigationContextResult = obj.setNavigationContext(closure_1, closure_2);
              const tmp2 = yield closure_2(closure_0);
              const result = callback(closure_1[6]).clearNavigationContext(setNavigationContextResult);
              const obj2 = callback(closure_1[6]);
              const activeRootSpan = callback(closure_1[6]).getActiveRootSpan();
              if (activeRootSpan) {
                if ("navigation" === obj4.spanToJSON(tmp5).op) {
                  if (callback) {
                    let tmp9 = tmp25;
                  } else {
                    tmp9 = tmp25;
                    if (!tmp25) {
                      const _location = callback(closure_1[5]).WINDOW.location;
                      let pathname;
                      if (null != _location) {
                        pathname = _location.pathname;
                      }
                      tmp9 = pathname;
                    }
                  }
                  if (tmp9) {
                    obj = { pathname: tmp9 };
                    const _Array = Array;
                    callback2(activeRootSpan, obj, Array.from(closure_16), false, closure_10);
                  }
                }
                const obj4 = callback(closure_1[8]);
              }
              return tmp2;
            })();
            if (activeRootSpan) {
              function trackLazyRouteLoad(activeRootSpan, promise) {
                const path = promise;
                let value = store.get(activeRootSpan);
                if (!value) {
                  const _Set = Set;
                  const set = new Set();
                  const result = store.set(activeRootSpan, set);
                  value = set;
                }
                value.add(promise);
                promise.finally(() => {
                  const value = closure_17.get(arg0);
                  if (value) {
                    value.delete(arg1);
                  }
                });
              }(activeRootSpan, tmp9);
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
  let obj = require(dependencyMap[8]);
  const client = obj.getClient();
  if (client) {
    if (weakSet.has(tmp7)) {
      let obj1 = require(dependencyMap[6]);
      const activeRootSpan = obj1.getActiveRootSpan();
      if (activeRootSpan) {
        let obj2 = require(dependencyMap[8]);
      }
      if ("PUSH" === navigationType) {
        if (logResult) {
          const obj4 = require(dependencyMap[6]);
          let tmp18 = allRoutes;
          if (!allRoutes) {
            tmp18 = routes;
          }
          let tmp19 = allRoutes;
          if (!allRoutes) {
            tmp19 = routes;
          }
          const tmp27 = callback3(obj4.resolveRouteNameAndSource(_location, tmp18, tmp19, logResult, basename), 2);
          const first = tmp27[0];
          const tmp33 = computeLocationKey(_location);
          const value = weakMap.get(tmp7);
          let isPlaceholder = !value;
          if (!isPlaceholder) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (timestamp) {
            timestamp = require(dependencyMap[8]).spanToJSON(value.span).timestamp;
            const obj5 = require(dependencyMap[8]);
          }
          const tmp38Result = shouldSkipNavigation(value, tmp33, first, timestamp);
          if (tmp38Result.skip) {
            if (tmp38Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp29;
                  if (require(dependencyMap[9]).DEBUG_BUILD) {
                    const debug3 = require(dependencyMap[8]).debug;
                    const _HermesInternal4 = HermesInternal;
                    logResult = routeName;
                    logResult = debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp29 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp29);
                  const span2 = value.span;
                  const attr = span2.setAttribute(require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30);
                  const result = require(dependencyMap[8]).addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp29;
                  if (require(dependencyMap[9]).DEBUG_BUILD) {
                    const debug2 = require(dependencyMap[8]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp29 + "\"");
                  }
                  const obj12 = require(dependencyMap[8]);
                }
              }
            }
            if (require(dependencyMap[9]).DEBUG_BUILD) {
              const debug = require(dependencyMap[8]).debug;
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
            const obj8 = require(dependencyMap[5]);
            const tmp60 = callback2({}, require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30);
            const _HermesInternal = HermesInternal;
            obj1.attributes = callback2(callback2(callback2({}, require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30), require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"), require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.react.reactrouter_v" + version);
            const result2 = obj8.startBrowserTracingNavigationSpan(tmp7, obj1);
            if (result2) {
              obj2 = { span: result2, routeName: obj.routeName, pathname: _location.pathname, locationKey: tmp34 };
              const result3 = obj10.set(tmp7, obj2);
              patchSpanEnd(result2, _location, routes, basename, allRoutes, "navigation");
            } else {
              obj10.delete(tmp7);
            }
            const tmp61 = callback2(callback2({}, require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp30), require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation");
          }
          const tmp17 = _location;
          const tmp38 = shouldSkipNavigation;
        }
      }
    }
  }
}
function addRoutesToAllRoutes(arr) {
  const item = arr.forEach((arg0) => {
    const item = callback(arg0).forEach((arg0) => {
      set.add(arg0);
    });
  });
}
function getChildRoutesRecursively(children) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let set = arguments[1];
    }
    const require = set;
    if (!set.has(children)) {
      set.add(children);
      if (tmp2) {
        children = children.children;
        const item = children.forEach((arg0) => {
          const item = callback(arg0, set).forEach((arg0) => {
            set.add(arg0);
          });
        });
      }
      const tmp2 = children.children && !children.index;
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
    const obj = require(dependencyMap[6]);
    let tmp6 = allRoutes;
    if (!allRoutes) {
      tmp6 = routes;
    }
    let tmp7 = allRoutes;
    if (!allRoutes) {
      tmp7 = routes;
    }
    const tmp15 = callback3(obj.resolveRouteNameAndSource(_location, tmp6, tmp7, tmp, basename), 2);
    const first = tmp15[0];
    const currentScope = require(dependencyMap[8]).getCurrentScope();
    let str = first;
    if (!first) {
      str = "/";
    }
    currentScope.setTransactionName(str);
    if (activeRootSpan) {
      activeRootSpan.updateName(first);
      const attr = activeRootSpan.setAttribute(require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp15[1]);
      patchSpanEnd(activeRootSpan, _location, routes, basename, allRoutes, "pageload");
    }
    const obj2 = require(dependencyMap[8]);
  }
}
function tryUpdateSpanNameBeforeEnd(updateName, data, description, _location, arg4, basename) {
  data = data.data;
  let tmp2;
  if (null != data) {
    tmp2 = tmp[closure_0(undefined, closure_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  }
  if ("route" === tmp2) {
    if (description) {
      const obj = require(dependencyMap[6]);
    }
  }
  const arr = Array.from(arg7);
  const tmp11 = arr.length > 0 ? arr : arg4;
  const tmp13 = callback5(tmp11, _location, basename);
  if (tmp13) {
    const obj2 = require(dependencyMap[6]);
    const tmp24 = callback3(obj2.resolveRouteNameAndSource(_location, tmp12, tmp12, tmp14, basename), 2);
    const first = tmp24[0];
    const tmp33 = function shouldUpdateWildcardSpanName(description, arg1, first, arg3, arg4) {
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
            result = !callback(closure_1[6]).transactionNameHasWildcard(description);
            const obj = callback(closure_1[6]);
          }
          if (!result) {
            result = "route" !== arg3;
          }
          if (!result) {
            result = callback(closure_1[6]).transactionNameHasWildcard(first);
            const obj2 = callback(closure_1[6]);
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
    }(description, tmp2, first, tmp24[1], true);
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
      const attr = updateName.setAttribute(require(dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp27);
    }
  }
}
function patchSpanEnd(activeRootSpan, _location, routes, basename, allRoutes, navigation) {
  const require = activeRootSpan;
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
        const prototype = _Set.prototype;
        _Set = new _Set(allRoutes);
      } else {
        _Set = set;
      }
      let closure_5 = _Set;
      const end = activeRootSpan.end;
      let closure_6 = end.bind(activeRootSpan);
      let closure_7 = false;
      activeRootSpan.end = function patchedEnd() {
        let data;
        let description;
        if (!closure_7) {
          closure_7 = true;
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
          const arg0 = result;
          const spanToJSONResult = arg0(arg1[8]).spanToJSON(arg0);
          ({ description, data } = spanToJSONResult);
          if (null != data) {
            const tmp9 = data[closure_0(undefined, closure_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          function cleanupNavigationSpan() {
            const client = result(cleanupNavigationSpan[8]).getClient();
            if (client) {
              if ("navigation" === closure_4) {
                const value = map.get(client);
                let tmp5 = value;
                if (value) {
                  tmp5 = value.span === result;
                }
                if (tmp5) {
                  map.delete(client);
                }
              }
            }
          }
          const arg1 = cleanupNavigationSpan;
          const value = closure_17.get(arg0);
          if (value) {
            if (value.size > 0) {
              if (description) {
                if (0 === closure_13) {
                  callback2(arg0, spanToJSONResult, description, arg1, arg2, arg3, arg5, _Set);
                  const result1 = cleanupNavigationSpan();
                  callback(result);
                } else {
                  const nextPromise = Promise.allSettled(value).then(() => {

                  });
                  let racePromise = nextPromise;
                  if (closure_13 !== Infinity) {
                    const items = [nextPromise, ];
                    const promise = new Promise((arg0) => setTimeout(arg0, closure_13));
                    items[1] = promise;
                    racePromise = Promise.race(items);
                  }
                  const allSettledResult = Promise.allSettled(value);
                  racePromise.then(() => {
                    const spanToJSONResult = result(cleanupNavigationSpan[8]).spanToJSON(result);
                    callback2(result, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, closure_2, closure_3, closure_4, closure_5);
                    cleanupNavigationSpan();
                    callback(result);
                  }).catch(() => {
                    cleanupNavigationSpan();
                    callback(result);
                  });
                  const nextPromise1 = racePromise.then(() => {
                    const spanToJSONResult = result(cleanupNavigationSpan[8]).spanToJSON(result);
                    callback2(result, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, closure_2, closure_3, closure_4, closure_5);
                    cleanupNavigationSpan();
                    callback(result);
                  });
                }
                const obj2 = arg0(arg1[6]);
              }
            }
          }
          callback2(arg0, spanToJSONResult, description, arg1, arg2, arg3, arg5, _Set);
          const result2 = cleanupNavigationSpan();
          callback(result);
          const obj = arg0(arg1[8]);
        }
      };
      obj = require(dependencyMap[8]);
      const result = obj.addNonEnumerableProperty(activeRootSpan, combined, true);
    }
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_11 = require(dependencyMap[4]);
let closure_12 = false;
let closure_13 = 3000;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
const set = new Set();
const weakMap1 = new WeakMap();

export { addResolvedRoutesToParent };
export { addRoutesToAllRoutes };
export const allRoutes = set;
export { computeLocationKey };
export const createReactRouterV6CompatibleTracingIntegration = function createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, 6) {
  let enableAsyncRouteHandlers;
  const require = instrumentPageLoad;
  const dependencyMap = _6;
  let obj = require(dependencyMap[5]);
  const result = obj.browserTracingIntegration(Object.assign({}, instrumentPageLoad, {}));
  let closure_2 = result;
  ({ useEffect: closure_3, useLocation: closure_4, useNavigationType: closure_5, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  let closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  let closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  let closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  obj = {
    setup(self) {
      result.setup(self);
      const finalTimeout = self.finalTimeout;
      let num = 30000;
      if (null != finalTimeout) {
        num = finalTimeout;
      }
      const idleTimeout = self.idleTimeout;
      let num2 = 1000;
      if (null != idleTimeout) {
        num2 = idleTimeout;
      }
      const result = 3 * num2;
      let tmp3 = result;
      if (null != closure_12) {
        tmp3 = closure_12;
      }
      if (tmp3 === Infinity) {
        tmp3 = num;
        if (self(arg1[9]).DEBUG_BUILD) {
          const debug3 = self(arg1[8]).debug;
          debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
        }
      } else {
        const _Number = Number;
        if (Number.isNaN(tmp3)) {
          if (self(arg1[9]).DEBUG_BUILD) {
            const debug2 = self(arg1[8]).debug;
            debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", result);
          }
          tmp3 = result;
        } else if (tmp3 < 0) {
          if (self(arg1[9]).DEBUG_BUILD) {
            const debug = self(arg1[8]).debug;
            debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp3, "falling back to:", result);
          }
          tmp3 = result;
        }
      }
      let closure_6 = closure_3;
      let closure_7 = closure_4;
      let closure_8 = closure_5;
      let closure_10 = closure_7;
      let closure_9 = closure_6;
      closure_12 = closure_9;
      let flag = closure_8;
      if (!closure_8) {
        flag = false;
      }
      const result1 = self(arg1[6]).initializeRouterUtils(closure_7, flag);
    },
    afterAllSetup(emit) {
      result.afterAllSetup(emit);
      const _location = emit(arg1[5]).WINDOW.location;
      if (null != _location) {
        const pathname = _location.pathname;
      }
      let tmp2 = closure_10;
      if (closure_10) {
        tmp2 = pathname;
      }
      if (tmp2) {
        let obj = emit(arg1[5]);
        obj = { name: pathname };
        const tmp6 = callback({}, emit(arg1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url");
        const _HermesInternal = HermesInternal;
        obj.attributes = callback(callback(callback({}, emit(arg1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), emit(arg1[8]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload"), emit(arg1[8]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.react.reactrouter_v" + arg1);
        const result = obj.startBrowserTracingPageLoadSpan(emit, obj);
        const tmp7 = callback(callback({}, emit(arg1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), emit(arg1[8]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "pageload");
      }
      if (closure_11) {
        set.add(emit);
      }
    }
  };
  return Object.assign({}, result, obj);
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, 6) {
  const require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_9) {
          if (closure_10) {
            class SentryRoutes {
              constructor(arg0) {
                arg0 = arg0;
                closure_1 = closure_11.useRef(true);
                tmp = closure_7();
                closure_2 = tmp;
                tmp2 = closure_8();
                closure_3 = tmp2;
                items = [, ];
                items[0] = tmp;
                items[1] = tmp2;
                tmp3 = closure_6(() => {
                  const tmp = callback(arg0.children);
                  if (ref.current) {
                    callback3(tmp);
                    let obj = { activeRootSpan: arg0(ref[6]).getActiveRootSpan(), location: tmp, routes: tmp };
                    const _Array2 = Array;
                    obj.allRoutes = Array.from(closure_16);
                    callback4(obj);
                    ref.current = false;
                    const obj3 = arg0(ref[6]);
                  } else {
                    obj = { location: tmp, routes: tmp, navigationType: callback2, version: ref };
                    const _Array = Array;
                    obj.allRoutes = Array.from(closure_16);
                    callback2(obj);
                  }
                }, items);
                return closure_11.createElement(arg0, Object.assign({}, arg0));
              }
            }
            require(dependencyMap[10]).hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (require(dependencyMap[9]).DEBUG_BUILD) {
    class SentryRoutes {
      constructor(arg0) {
        arg0 = arg0;
        closure_1 = closure_11.useRef(true);
        tmp = closure_7();
        closure_2 = tmp;
        tmp2 = closure_8();
        closure_3 = tmp2;
        items = [, ];
        items[0] = tmp;
        items[1] = tmp2;
        tmp3 = closure_6(() => {
          const tmp = callback(arg0.children);
          if (ref.current) {
            callback3(tmp);
            let obj = { activeRootSpan: arg0(ref[6]).getActiveRootSpan(), location: tmp, routes: tmp };
            const _Array2 = Array;
            obj.allRoutes = Array.from(closure_16);
            callback4(obj);
            ref.current = false;
            const obj3 = arg0(ref[6]);
          } else {
            obj = { location: tmp, routes: tmp, navigationType: callback2, version: ref };
            const _Array = Array;
            obj.allRoutes = Array.from(closure_16);
            callback2(obj);
          }
        }, items);
        return closure_11.createElement(arg0, Object.assign({}, arg0));
      }
    }
    const debug = require(dependencyMap[8]).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: " + closure_6 + ". useLocation: " + closure_7 + ". useNavigationType: " + closure_8 + ".\n      createRoutesFromChildren: " + closure_9 + ". matchRoutes: " + closure_10 + ".");
  }
  return arg0;
};
export const createV6CompatibleWrapCreateBrowserRouter = function createV6CompatibleWrapCreateBrowserRouter(arg0, 6) {
  const require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_10) {
          let fn = (routes, basename) => {
            callback3(routes);
            if (closure_12) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let tmp6 = routes;
                let tmp7 = basename;
                let obj = routes(basename[7]);
                let tmp8 = closure_23;
                let result = obj.checkRouteForAsyncHandler(tmp4, closure_23);
                // continue
              }
            }
            const tmp10 = routes(routes, callback2(basename));
            basename = undefined;
            if (null != basename) {
              basename = basename.basename;
            }
            const activeRootSpan = routes(basename[6]).getActiveRootSpan();
            if (tmp13) {
              obj = { activeRootSpan, location: tmp10.state.location, routes, basename };
              const _Array = Array;
              obj.allRoutes = Array.from(closure_16);
              callback4(obj);
            }
            callback(tmp10, routes, basename, basename, activeRootSpan);
            return tmp10;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (require(dependencyMap[9]).DEBUG_BUILD) {
    const debug = require(dependencyMap[8]).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, 6) {
  const require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_10) {
          let fn = (routes, basename) => {
            callback3(routes);
            if (closure_12) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let tmp6 = routes;
                let tmp7 = basename;
                let obj = routes(basename[7]);
                let tmp8 = closure_23;
                let result = obj.checkRouteForAsyncHandler(tmp4, closure_23);
                // continue
              }
            }
            const tmp10 = routes(routes, callback2(basename, true));
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
            const activeRootSpan = routes(basename[6]).getActiveRootSpan();
            if (tmp19) {
              obj = { activeRootSpan, location: _location, routes, basename };
              const _Array = Array;
              obj.allRoutes = Array.from(closure_16);
              callback4(obj);
            }
            callback(tmp10, routes, basename, basename, activeRootSpan);
            return tmp10;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (require(dependencyMap[9]).DEBUG_BUILD) {
    const debug = require(dependencyMap[8]).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, 6) {
  const require = arg0;
  const dependencyMap = _6;
  if (closure_6) {
    if (closure_7) {
      if (closure_8) {
        if (closure_10) {
          function SentryRoutes(routes) {
            const callback = React.useRef(true);
            routes = routes.routes;
            const arg1 = routes;
            const locationArg = routes.locationArg;
            const tmp2 = callback3();
            const tmp3 = callback4();
            const SentryRoutes = tmp3;
            if ("string" === typeof locationArg) {
              let tmp5 = locationArg;
            } else {
              tmp5 = tmp2;
              if (null != locationArg) {
                tmp5 = tmp2;
              }
            }
            const items = [tmp3, tmp5];
            callback2(() => {
              if ("string" === typeof tmp5) {
                let obj = { pathname: tmp5 };
                let tmp = obj;
              } else {
                tmp = tmp5;
              }
              if (ref.current) {
                callback2(routes);
                obj = { activeRootSpan: ref(routes[6]).getActiveRootSpan(), location: tmp, routes };
                const _Array2 = Array;
                obj.allRoutes = Array.from(closure_16);
                callback3(obj);
                ref.current = false;
                const obj4 = ref(routes[6]);
              } else {
                obj = { location: tmp, routes, navigationType: callback, version: routes };
                const _Array = Array;
                obj.allRoutes = Array.from(closure_16);
                callback(obj);
              }
            }, items);
            return callback(routes, locationArg);
          }
          return (routes, locationArg) => <SentryRoutes routes={arg0} locationArg={arg1} />;
        }
      }
    }
  }
  if (require(dependencyMap[9]).DEBUG_BUILD) {
    const debug = require(dependencyMap[8]).debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };
