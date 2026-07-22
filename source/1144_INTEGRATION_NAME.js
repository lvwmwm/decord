// Module ID: 1144
// Function ID: 13047
// Name: INTEGRATION_NAME
// Dependencies: [6, 7, 794, 977, 1130, 977, 991, 990, 1111, 793, 978, 27]
// Exports: getReactNavigationIntegration, reactNavigationIntegration

// Module 1144 (INTEGRATION_NAME)
import _classCallCheck from "_classCallCheck";


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
    const tmp = undefined !== enableTimeToInitialDisplay && enableTimeToInitialDisplay;
    const ignoreEmptyBackNavigationTransactions = first.ignoreEmptyBackNavigationTransactions;
    const tmp2 = undefined === ignoreEmptyBackNavigationTransactions || ignoreEmptyBackNavigationTransactions;
    const enableTimeToInitialDisplayForPreloadedRoutes = first.enableTimeToInitialDisplayForPreloadedRoutes;
    const useDispatchedActionData = first.useDispatchedActionData;
    const tmp4 = undefined !== useDispatchedActionData && useDispatchedActionData;
    const useFullPathsForNavigationRoutes = first.useFullPathsForNavigationRoutes;
    const tmp5 = undefined !== useFullPathsForNavigationRoutes && useFullPathsForNavigationRoutes;
    const defaultIdleOptions = arg1(dependencyMap[1]).defaultIdleOptions;
    let closure_12 = false;
    let closure_13 = [];
    if (tmp) {
      const NATIVE = arg1(dependencyMap[2]).NATIVE;
      const nativeReactNavigationNewFrameTracking = NATIVE.initNativeReactNavigationNewFrameTracking();
      nativeReactNavigationNewFrameTracking.catch((arg0) => {
        const debug = store(closure_1[3]).debug;
        debug.error("" + "ReactNavigation" + " Failed to initialize native new frame tracking: " + arg0);
      });
    }
    function startIdleNavigationSpan(data) {
      const tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      if (tmp4) {
        let noop;
        if (null != data) {
          noop = data.data.noop;
        }
        if (noop) {
          const debug3 = store(currentRoute[3]).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("" + "ReactNavigation" + " Navigation action is a noop, not starting navigation span.");
        }
      }
      if (tmp4) {
        let type;
        if (null != data) {
          type = data.data.action.type;
        }
      }
      if (tmp4) {
        if (tmp4) {
          const items = [];
          if (items.includes(tmp4)) {
            const debug2 = store(currentRoute[3]).debug;
            const _HermesInternal2 = HermesInternal;
            debug2.log("" + "ReactNavigation" + " Navigation action is " + tmp4 + ", not starting navigation span.");
          }
        }
      }
      if (result) {
        const debug = store(currentRoute[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("" + "ReactNavigation" + " A transaction was detected that turned out to be a noop, discarding.");
        _discardLatestTransaction();
        clearStateChangeTimeout();
      }
      let obj = store(currentRoute[1]);
      let beforeStartSpan;
      if (null != currentRoute) {
        beforeStartSpan = currentRoute.options.beforeStartSpan;
      }
      if (beforeStartSpan) {
        const options = currentRoute.options;
        let beforeStartSpanResult = options.beforeStartSpan(store(currentRoute[1]).getDefaultIdleNavigationSpanOptions());
        const obj3 = store(currentRoute[1]);
      } else {
        beforeStartSpanResult = store(currentRoute[1]).getDefaultIdleNavigationSpanOptions();
        const obj2 = store(currentRoute[1]);
      }
      const result = obj.startIdleNavigationSpan(beforeStartSpanResult, Object.assign(Object.assign({}, defaultIdleOptions), { isAppRestart: tmp }));
      if (null != result) {
        const attr = result.setAttribute(store(currentRoute[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, store(currentRoute[7]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
      }
      if (null != result) {
        const attr1 = result.setAttribute(store(currentRoute[8]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
      }
      if (tmp2) {
        const obj4 = store(currentRoute[9]);
        const result1 = obj4.ignoreEmptyBackNavigation(store(currentRoute[3]).getClient(), result);
        const obj5 = store(currentRoute[3]);
      }
      const store = result;
      const obj6 = store(currentRoute[9]);
      const client = store(currentRoute[3]).getClient();
      const result2 = obj6.ignoreEmptyRouteChangeTransactions(client, result, store(currentRoute[1]).DEFAULT_NAVIGATION_SPAN_NAME, () => result === closure_0);
      let tmp38 = tmp;
      if (tmp) {
        tmp38 = result;
      }
      if (tmp38) {
        const NATIVE = store(currentRoute[2]).NATIVE;
        NATIVE.setActiveSpanId(result.spanContext().spanId);
        obj = { monitorTypeSurfaces: null, preferCurrentTab: "\u{1F61B}" };
        const obj8 = store(currentRoute[3]);
        obj.startTime = store(currentRoute[3]).spanToJSON(result).start_timestamp;
        const startInactiveSpanResult = obj8.startInactiveSpan(obj);
        const attr2 = startInactiveSpanResult.setAttribute(store(currentRoute[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, store(currentRoute[7]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
        const obj10 = store(currentRoute[3]);
      }
      const timeout = setTimeout(_discardLatestTransaction, num);
    }
    function updateLatestNavigationSpanWithCurrentRoute() {
      let arr;
      store(currentRoute[3]);
      if (store) {
        const currentRoute = store.getCurrentRoute();
        if (currentRoute) {
          if (closure_3) {
            const NATIVE = tmp15(tmp16[2]).NATIVE;
            const result = tmp15(tmp16[10]).addTimeToInitialDisplayFallback(closure_3.spanContext().spanId, NATIVE.getNewScreenTimeToDisplay());
            if (tmp3) {
              if (tmp3.key === currentRoute.key) {
                const debug4 = store(currentRoute[3]).debug;
                const _HermesInternal6 = HermesInternal;
                debug4.log("[" + "ReactNavigation" + "] Navigation state changed, but route is the same as previous.");
                pushRecentRouteKey(currentRoute.key);
                let merged = currentRoute;
                closure_3 = undefined;
              }
            }
            let name = currentRoute.name;
            const hasItem = arr.includes(currentRoute.key);
            if (tmp5) {
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
            if (null != closure_4) {
              const _HermesInternal4 = HermesInternal;
              closure_4.updateName("Navigation dispatch to screen " + name + " mounted");
            }
            if (null != closure_4) {
              let obj = { code: store(currentRoute[3]).SPAN_STATUS_OK };
              closure_4.setStatus(obj);
            }
            if (null != closure_4) {
              closure_4.end(tmp2);
            }
            closure_4 = undefined;
            let obj2 = store(currentRoute[3]);
            if (obj2.spanToJSON(closure_3).description === store(currentRoute[1]).DEFAULT_NAVIGATION_SPAN_NAME) {
              closure_3.updateName(name);
            }
            obj = { route.name: name, route.key: currentRoute.key, route.has_been_seen: hasItem };
            let name2;
            if (null != tmp3) {
              name2 = tmp3.name;
            }
            obj.previous_route.name = name2;
            let key;
            if (null != tmp3) {
              key = tmp3.key;
            }
            obj.previous_route.key = key;
            const tmp15Result = tmp15(tmp16[10]);
            closure_3.setAttributes(merged(merged(obj, store(currentRoute[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component"), store(currentRoute[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "navigation"));
            clearStateChangeTimeout();
            const tmp51Result = merged(obj, store(currentRoute[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "component");
            const obj1 = { 478255568: "channelId", 1636470997: "channelId" };
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
            store(currentRoute[3]).addBreadcrumb(obj1);
            if (null != currentRoute) {
              currentRoute.setCurrentRoute(name);
            }
            pushRecentRouteKey(currentRoute.key);
            merged = currentRoute;
            if (tmp5) {
              const _Object = Object;
              const _Object2 = Object;
              const obj3 = { name };
              merged = Object.assign(Object.assign({}, currentRoute), obj3);
            }
            closure_3 = undefined;
            const obj5 = store(currentRoute[3]);
          } else {
            const debug3 = tmp15(tmp16[3]).debug;
            const _HermesInternal3 = HermesInternal;
            debug3.log("[" + "ReactNavigation" + "] Navigation state changed, but navigation transaction was not started on dispatch.");
          }
        } else {
          const debug2 = store(currentRoute[3]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("[" + "ReactNavigation" + "] Navigation state changed, but no route is rendered.");
        }
      } else {
        const debug = store(currentRoute[3]).debug;
        const _HermesInternal = HermesInternal;
        debug.warn("" + "ReactNavigation" + " Missing navigation container ref. Route transactions will not be sent.");
      }
    }
    function pushRecentRouteKey(key) {
      let arr = arr.push(key);
      if (arr.length > 200) {
        arr = arr.slice(arr.length - 200);
      }
    }
    function _discardLatestTransaction() {
      if (closure_3) {
        if (obj.isSentrySpan(closure_3)) {
          closure_3._sampled = false;
        }
        closure_3.end();
        closure_3 = undefined;
        const obj = store(closure_1[11]);
      }
      if (closure_4) {
        closure_4 = undefined;
      }
    }
    function clearStateChangeTimeout() {
      if (undefined !== closure_5) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_5);
        closure_5 = undefined;
      }
    }
    let obj = {
      name: "ReactNavigation",
      afterAllSetup(client) {
          let obj = store(reactNativeTracingIntegration[4]);
          const reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(client);
          if (reactNativeTracingIntegration) {
            obj = { finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs, idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs };
            const defaultIdleOptions = obj;
          }
          if (!closure_12) {
            const appRegistryIntegration = store(reactNativeTracingIntegration[5]).getAppRegistryIntegration(client);
            if (!tmp7) {
              appRegistryIntegration.onRunApplication(() => {
                if (closure_12) {
                  const debug = callback(reactNativeTracingIntegration[3]).debug;
                  debug.log("[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.");
                  callback2(undefined, true);
                }
              });
            }
            startIdleNavigationSpan();
            if (store) {
              updateLatestNavigationSpanWithCurrentRoute();
              closure_12 = true;
            }
            const obj3 = store(reactNativeTracingIntegration[5]);
            const tmp7 = null === appRegistryIntegration || undefined === appRegistryIntegration;
          }
        },
      registerNavigationContainer(navigationContainerRef) {
          if (current(closure_1[6]).RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
            const debug = current(closure_1[3]).debug;
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
              current(closure_1[6]).RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
              if (!closure_12) {
                if (closure_3) {
                  updateLatestNavigationSpanWithCurrentRoute();
                  closure_12 = true;
                } else {
                  const debug4 = current(closure_1[3]).debug;
                  const _HermesInternal4 = HermesInternal;
                  debug4.log("" + "ReactNavigation" + " Navigation container registered, but integration has not been setup yet.");
                }
              }
            } else {
              const debug3 = current(closure_1[3]).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.warn("" + "ReactNavigation" + " Received invalid navigation container ref!");
            }
          } else {
            const debug2 = current(closure_1[3]).debug;
            const _HermesInternal2 = HermesInternal;
            debug2.log("" + "ReactNavigation" + " Navigation container ref is the same as the one already registered.");
          }
        }
    };
    obj = { routeChangeTimeoutMs: num, enableTimeToInitialDisplay: tmp, ignoreEmptyBackNavigationTransactions: tmp2, enableTimeToInitialDisplayForPreloadedRoutes: undefined !== enableTimeToInitialDisplayForPreloadedRoutes && enableTimeToInitialDisplayForPreloadedRoutes, useDispatchedActionData: tmp4, useFullPathsForNavigationRoutes: tmp5 };
    obj.options = obj;
    return obj;
  }
  first = {};
};
export const getReactNavigationIntegration = function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName("ReactNavigation");
};
