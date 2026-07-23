// Module ID: 1144
// Function ID: 13048
// Name: INTEGRATION_NAME
// Dependencies: [77, 1136, 977, 794, 1142, 1129, 793, 1134, 1133, 1137, 1145, 1098]
// Exports: getReactNavigationIntegration, reactNavigationIntegration

// Module 1144 (INTEGRATION_NAME)
import _defineProperty from "_defineProperty";

const require = arg1;

export const INTEGRATION_NAME = "ReactNavigation";
export const reactNavigationIntegration = function reactNavigationIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const routeChangeTimeoutMs = first.routeChangeTimeoutMs;
    let num = 1000;
    if (undefined !== routeChangeTimeoutMs) {
      num = routeChangeTimeoutMs;
    }
    const enableTimeToInitialDisplay = first.enableTimeToInitialDisplay;
    let closure_7 = tmp;
    const ignoreEmptyBackNavigationTransactions = first.ignoreEmptyBackNavigationTransactions;
    let closure_8 = tmp2;
    const enableTimeToInitialDisplayForPreloadedRoutes = first.enableTimeToInitialDisplayForPreloadedRoutes;
    const useDispatchedActionData = first.useDispatchedActionData;
    let closure_9 = tmp4;
    const useFullPathsForNavigationRoutes = first.useFullPathsForNavigationRoutes;
    let closure_10 = tmp5;
    const defaultIdleOptions = require(1136) /* getDefaultIdleNavigationSpanOptions */.defaultIdleOptions;
    let c12 = false;
    let closure_13 = [];
    if (undefined !== enableTimeToInitialDisplay && enableTimeToInitialDisplay) {
      let NATIVE = require(977) /* getRNSentryModule */.NATIVE;
      const nativeReactNavigationNewFrameTracking = NATIVE.initNativeReactNavigationNewFrameTracking();
      nativeReactNavigationNewFrameTracking.catch((arg0) => {
        const debug = outer1_0(outer1_1[3]).debug;
        debug.error("" + "ReactNavigation" + " Failed to initialize native new frame tracking: " + arg0);
      });
    }
    function startIdleNavigationSpan(data) {
      if (closure_9) {
        let noop;
        if (null != data) {
          noop = data.data.noop;
        }
        if (noop) {
          const debug3 = outer1_0(outer1_1[3]).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("" + "ReactNavigation" + " Navigation action is a noop, not starting navigation span.");
        }
      }
      if (closure_9) {
        let type;
        if (null != data) {
          type = data.data.action.type;
        }
      }
      if (closure_9) {
        if (tmp4) {
          const items = ["PRELOAD", "SET_PARAMS", "OPEN_DRAWER", "CLOSE_DRAWER", "TOGGLE_DRAWER"];
          if (items.includes(tmp4)) {
            const debug2 = outer1_0(outer1_1[3]).debug;
            const _HermesInternal2 = HermesInternal;
            debug2.log("" + "ReactNavigation" + " Navigation action is " + tmp4 + ", not starting navigation span.");
          }
        }
      }
      if (result) {
        const debug = outer1_0(outer1_1[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("" + "ReactNavigation" + " A transaction was detected that turned out to be a noop, discarding.");
        _discardLatestTransaction();
        clearStateChangeTimeout();
      }
      let obj = outer1_0(outer1_1[1]);
      let beforeStartSpan;
      if (null != currentRoute) {
        beforeStartSpan = currentRoute.options.beforeStartSpan;
      }
      if (beforeStartSpan) {
        const options = currentRoute.options;
        let beforeStartSpanResult = options.beforeStartSpan(outer1_0(outer1_1[1]).getDefaultIdleNavigationSpanOptions());
        const obj3 = outer1_0(outer1_1[1]);
      } else {
        beforeStartSpanResult = outer1_0(outer1_1[1]).getDefaultIdleNavigationSpanOptions();
        const obj2 = outer1_0(outer1_1[1]);
      }
      result = obj.startIdleNavigationSpan(beforeStartSpanResult, Object.assign(Object.assign({}, defaultIdleOptions), { isAppRestart: arguments.length > 1 && undefined !== arguments[1] && arguments[1] }));
      if (null != result) {
        const attr = result.setAttribute(outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, outer1_0(outer1_1[7]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
      }
      if (null != result) {
        const attr1 = result.setAttribute(outer1_0(outer1_1[8]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
      }
      if (closure_8) {
        const obj4 = outer1_0(outer1_1[9]);
        const result1 = obj4.ignoreEmptyBackNavigation(outer1_0(outer1_1[3]).getClient(), result);
        const obj5 = outer1_0(outer1_1[3]);
      }
      let closure_0 = result;
      const obj6 = outer1_0(outer1_1[9]);
      const tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      const client = outer1_0(outer1_1[3]).getClient();
      const result2 = obj6.ignoreEmptyRouteChangeTransactions(client, result, outer1_0(outer1_1[1]).DEFAULT_NAVIGATION_SPAN_NAME, () => result === closure_0);
      let tmp38 = closure_7;
      if (closure_7) {
        tmp38 = result;
      }
      if (tmp38) {
        const NATIVE = outer1_0(outer1_1[2]).NATIVE;
        NATIVE.setActiveSpanId(result.spanContext().spanId);
        obj = { op: "navigation.processing", name: "Navigation dispatch to navigation cancelled or screen mounted" };
        const obj8 = outer1_0(outer1_1[3]);
        obj.startTime = outer1_0(outer1_1[3]).spanToJSON(result).start_timestamp;
        const startInactiveSpanResult = obj8.startInactiveSpan(obj);
        const attr2 = startInactiveSpanResult.setAttribute(outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, outer1_0(outer1_1[7]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
        const obj10 = outer1_0(outer1_1[3]);
      }
      const timeout = setTimeout(_discardLatestTransaction, num);
    }
    function updateLatestNavigationSpanWithCurrentRoute() {
      let arr;
      outer1_0(outer1_1[3]);
      if (store) {
        const currentRoute = store.getCurrentRoute();
        if (currentRoute) {
          if (c3) {
            const NATIVE = tmp15(tmp16[2]).NATIVE;
            const result = tmp15(tmp16[10]).addTimeToInitialDisplayFallback(c3.spanContext().spanId, NATIVE.getNewScreenTimeToDisplay());
            if (tmp3) {
              if (tmp3.key === currentRoute.key) {
                const debug4 = outer1_0(outer1_1[3]).debug;
                const _HermesInternal6 = HermesInternal;
                debug4.log("[" + "ReactNavigation" + "] Navigation state changed, but route is the same as previous.");
                pushRecentRouteKey(currentRoute.key);
                let merged = currentRoute;
                c3 = undefined;
              }
            }
            let name = currentRoute.name;
            const hasItem = arr.includes(currentRoute.key);
            if (closure_10) {
              let state = store.getState();
              let name1;
              if (state) {
                const items = [];
                while (state) {
                  let index = state.index;
                  let num4 = 0;
                  if (null !== index) {
                    num4 = 0;
                    if (undefined !== index) {
                      num4 = index;
                    }
                  }
                  let tmp28 = state.routes[num4];
                  name = undefined;
                  if (null != tmp28) {
                    name = tmp28.name;
                  }
                  if (name) {
                    arr = items.push(tmp28.name);
                  }
                  state = undefined;
                  if (null != tmp28) {
                    state = tmp28.state;
                  }
                }
                let joined;
                if (items.length > 0) {
                  joined = items.join("/");
                }
                name1 = joined;
              }
              if (!name1) {
                name1 = currentRoute.name;
              }
              name = name1;
            }
            if (null != c4) {
              const _HermesInternal4 = HermesInternal;
              c4.updateName("Navigation dispatch to screen " + name + " mounted");
            }
            if (null != c4) {
              let obj = { code: outer1_0(outer1_1[3]).SPAN_STATUS_OK };
              c4.setStatus(obj);
            }
            if (null != c4) {
              c4.end(tmp2);
            }
            c4 = undefined;
            let obj2 = outer1_0(outer1_1[3]);
            if (obj2.spanToJSON(c3).description === outer1_0(outer1_1[1]).DEFAULT_NAVIGATION_SPAN_NAME) {
              c3.updateName(name);
            }
            obj = { "route.name": name, "route.key": currentRoute.key, "route.has_been_seen": hasItem };
            let name2;
            if (null != tmp3) {
              name2 = tmp3.name;
            }
            obj["previous_route.name"] = name2;
            let key;
            if (null != tmp3) {
              key = tmp3.key;
            }
            obj["previous_route.key"] = key;
            const tmp15Result = tmp15(tmp16[10]);
            c3.setAttributes(outer1_2(outer1_2(obj, outer1_0(outer1_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component"), outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"));
            clearStateChangeTimeout();
            const tmp51Result = outer1_2(obj, outer1_0(outer1_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component");
            const obj1 = { category: "navigation", type: "navigation" };
            const _HermesInternal5 = HermesInternal;
            obj1.message = "Navigation to " + name;
            obj2 = {};
            let name3;
            if (null != tmp3) {
              name3 = tmp3.name;
            }
            obj2.from = name3;
            obj2.to = name;
            obj1.data = obj2;
            outer1_0(outer1_1[3]).addBreadcrumb(obj1);
            if (null != currentRoute) {
              currentRoute.setCurrentRoute(name);
            }
            pushRecentRouteKey(currentRoute.key);
            merged = currentRoute;
            if (closure_10) {
              const _Object = Object;
              const _Object2 = Object;
              const obj3 = { name };
              merged = Object.assign(Object.assign({}, currentRoute), obj3);
            }
            c3 = undefined;
            const obj5 = outer1_0(outer1_1[3]);
          } else {
            const debug3 = tmp15(tmp16[3]).debug;
            const _HermesInternal3 = HermesInternal;
            debug3.log("[" + "ReactNavigation" + "] Navigation state changed, but navigation transaction was not started on dispatch.");
          }
        } else {
          const debug2 = outer1_0(outer1_1[3]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("[" + "ReactNavigation" + "] Navigation state changed, but no route is rendered.");
        }
      } else {
        const debug = outer1_0(outer1_1[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("" + "ReactNavigation" + " Missing navigation container ref. Route transactions will not be sent.");
      }
    }
    function pushRecentRouteKey(key) {
      arr = arr.push(key);
      if (arr.length > 200) {
        arr = arr.slice(arr.length - 200);
      }
    }
    function _discardLatestTransaction() {
      if (c3) {
        if (obj.isSentrySpan(c3)) {
          c3._sampled = false;
        }
        c3.end();
        c3 = undefined;
        obj = outer1_0(outer1_1[11]);
      }
      if (c4) {
        c4 = undefined;
      }
    }
    function clearStateChangeTimeout() {
      if (undefined !== c5) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c5);
        c5 = undefined;
      }
    }
    let obj = {
      name: "ReactNavigation",
      afterAllSetup(client) {
          let obj = outer1_0(outer1_1[4]);
          const reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(client);
          if (reactNativeTracingIntegration) {
            obj = { finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs, idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs };
          }
          if (!c12) {
            const appRegistryIntegration = outer1_0(outer1_1[5]).getAppRegistryIntegration(client);
            if (!tmp7) {
              appRegistryIntegration.onRunApplication(() => {
                if (c12) {
                  const debug = outer2_0(outer2_1[3]).debug;
                  debug.log("[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.");
                  outer1_14(undefined, true);
                }
              });
            }
            startIdleNavigationSpan();
            if (closure_0) {
              updateLatestNavigationSpanWithCurrentRoute();
              c12 = true;
            }
            const obj3 = outer1_0(outer1_1[5]);
            tmp7 = null === appRegistryIntegration || undefined === appRegistryIntegration;
          }
        },
      registerNavigationContainer(navigationContainerRef) {
          if (outer1_0(outer1_1[6]).RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
            const debug = outer1_0(outer1_1[3]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("" + "ReactNavigation" + " Instrumentation already exists, but registering again...");
          }
          let current = navigationContainerRef;
          if (obj.isPlainObject(navigationContainerRef)) {
            current = navigationContainerRef;
            if ("current" in navigationContainerRef) {
              current = navigationContainerRef.current;
            }
          }
          if (current !== current) {
            if (current) {
              current.addListener("__unsafe_action__", startIdleNavigationSpan);
              current.addListener("state", updateLatestNavigationSpanWithCurrentRoute);
              outer1_0(outer1_1[6]).RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
              if (!c12) {
                if (closure_3) {
                  updateLatestNavigationSpanWithCurrentRoute();
                  c12 = true;
                } else {
                  const debug4 = outer1_0(outer1_1[3]).debug;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("" + "ReactNavigation" + " Navigation container registered, but integration has not been setup yet.");
                }
              }
            } else {
              const debug3 = outer1_0(outer1_1[3]).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.warn("" + "ReactNavigation" + " Received invalid navigation container ref!");
            }
          } else {
            const debug2 = outer1_0(outer1_1[3]).debug;
            const _HermesInternal2 = HermesInternal;
            debug2.log("" + "ReactNavigation" + " Navigation container ref is the same as the one already registered.");
          }
        }
    };
    obj = { routeChangeTimeoutMs: num, enableTimeToInitialDisplay: undefined !== enableTimeToInitialDisplay && enableTimeToInitialDisplay, ignoreEmptyBackNavigationTransactions: undefined === ignoreEmptyBackNavigationTransactions || ignoreEmptyBackNavigationTransactions, enableTimeToInitialDisplayForPreloadedRoutes: undefined !== enableTimeToInitialDisplayForPreloadedRoutes && enableTimeToInitialDisplayForPreloadedRoutes, useDispatchedActionData: undefined !== useDispatchedActionData && useDispatchedActionData, useFullPathsForNavigationRoutes: undefined !== useFullPathsForNavigationRoutes && useFullPathsForNavigationRoutes };
    obj.options = obj;
    return obj;
  }
  first = {};
};
export const getReactNavigationIntegration = function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName("ReactNavigation");
};
