// Module ID: 1030
// Function ID: 1031
// Dependencies: [1022, 866, 681, 1028, 1015, 680, 1020, 1019, 1023, 1031, 984]
// Exports: getReactNavigationIntegration, reactNavigationIntegration

// Module 1030
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 680 */;
import _mod681 from "module_681" /* 681 */;
import _mod984 from "module_984" /* 984 */;
import SEMANTIC_ATTRIBUTE_SENTRY_SOURCE from "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE" /* 1019 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1022 */;
import _mod1028 from "module_1028" /* 1028 */;
import _mod1031 from "module_1031" /* 1031 */;

let _undefined, _undefined2;

let tmp;
const _mod1015 = tmp(1015);
const ReactNavigation = "ReactNavigation";

export const INTEGRATION_NAME = "ReactNavigation";
export const reactNavigationIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.routeChangeTimeoutMs;
  if (num === undefined) {
    num = 1000;
  }
  let flag = obj.enableTimeToInitialDisplay;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.ignoreEmptyBackNavigationTransactions;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = obj.enableTimeToInitialDisplayForPreloadedRoutes;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.useDispatchedActionData;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = obj.useFullPathsForNavigationRoutes;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = obj.enablePrefetchTracking;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let current;
  let reactNativeTracingIntegration;
  let merged;
  let c9;
  let c10;
  let c11;
  let startIdleNavigationSpan;
  let updateLatestNavigationSpanWithCurrentRoute;
  let pushRecentRouteKey;
  let _discardLatestTransaction;
  let clearStateChangeTimeout;
  let tmp = num;
  const tmp2 = flag;
  let obj2 = num(flag[0]).defaultIdleOptions;
  let c13 = false;
  let closure_14 = [];
  if (flag) {
    let NATIVE = tmp(tmp2[1]).NATIVE;
    const nativeReactNavigationNewFrameTracking = NATIVE.initNativeReactNavigationNewFrameTracking();
    nativeReactNavigationNewFrameTracking.catch((error) => {
      const debug = num(flag[2]).debug;
      debug.error("" + flag2 + " Failed to initialize native new frame tracking: " + error);
    });
  }
  startIdleNavigationSpan = function startIdleNavigationSpan(data) {
    let beforeStartSpanResult;
    let c10;
    let c9;
    let closure_11;
    let obj7;
    let obj8;
    let timeout;
    flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let str8;
    let c1;
    let closure_2;
    if (flag4) {
      let noop;
      if (null != data) {
        noop = data.data.noop;
      }
      if (noop) {
        const debug4 = num(flag[2]).debug;
        const _HermesInternal5 = HermesInternal;
        debug4.log("" + flag2 + " Navigation action is a noop, not starting navigation span.");
      }
    }
    if (flag4) {
      let type;
      if (null != data) {
        type = data.data.action.type;
      }
    }
    const tmp7 = flag6;
    if (tmp7) {
      if ("PRELOAD" === tmp4) {
        let action;
        if (null != data) {
          action = data.data.action;
        }
        let payload;
        if (null != action) {
          payload = action.payload;
        }
        str8 = "Unknown Route";
        if (payload) {
          str8 = "Unknown Route";
          if (typeof payload === "object") {
            str8 = "Unknown Route";
            if ("name" in payload) {
              str8 = "Unknown Route";
              if (typeof payload.name === "string") {
                str8 = payload.name;
              }
            }
          }
        }
        const debug3 = num(flag[2]).debug;
        const _HermesInternal3 = HermesInternal;
        debug3.log("" + flag2 + " Starting prefetch span for route: " + str8);
        const _HermesInternal4 = HermesInternal;
        const obj6 = { op: "navigation.prefetch", name: "Prefetch " + str8, attributes: obj8 };
        const startInactiveSpan2 = num(flag[2]).startInactiveSpan;
        num(flag[2]);
        obj8 = { "route.name": str8 };
        const startInactiveSpan2Result = startInactiveSpan2(obj6);
        c1 = startInactiveSpan2Result;
        c10 = startInactiveSpan2Result;
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          if (c10 === _undefined) {
            const debug = _mod681.debug;
            const _HermesInternal = HermesInternal;
            debug.log("" + ReactNavigation + " Prefetch span timed out for route: " + str8);
            const tmp3 = require;
            if (null != _undefined) {
              const setStatus = obj.setStatus;
              obj2 = { code: tmp3(681).SPAN_STATUS_OK };
              setStatus(obj2);
            }
            if (null != _undefined) {
              _undefined.end();
            }
            c10 = undefined;
          }
        }, str8);
      }
    }
    if (flag4) {
      if (tmp4) {
        const items = ["PRELOAD", "SET_PARAMS", "OPEN_DRAWER", "CLOSE_DRAWER", "TOGGLE_DRAWER"];
        if (items.includes(tmp4)) {
          const debug2 = num(flag[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("" + flag2 + " Navigation action is " + tmp4 + ", not starting navigation span.");
        }
      }
    }
    const tmp8 = _undefined;
    if (tmp8) {
      let debug = num(flag[2]).debug;
      let _HermesInternal = HermesInternal;
      debug.log("" + flag2 + " A transaction was detected that turned out to be a noop, discarding.");
      if (typeof _discardLatestTransaction === "function") {
        const tmp15 = _undefined;
        if (tmp15) {
          const obj = num(flag[10]);
          if (obj.isSentrySpan(_undefined)) {
            _undefined._sampled = false;
          }
          _undefined.end();
          _undefined = undefined;
        }
        const tmp22 = c10;
        if (tmp22) {
          c10 = undefined;
        }
        if (typeof clearStateChangeTimeout === "function") {
          if (undefined !== timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = undefined;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let beforeStartSpan1;
    startIdleNavigationSpan = num(flag[0]).startIdleNavigationSpan;
    num(flag[0]);
    if (null != reactNativeTracingIntegration) {
      beforeStartSpan1 = reactNativeTracingIntegration.options.beforeStartSpan;
    }
    if (beforeStartSpan1) {
      const options = reactNativeTracingIntegration.options;
      const beforeStartSpan = options.beforeStartSpan;
      const obj3 = num(flag[0]);
      beforeStartSpanResult = beforeStartSpan(obj3.getDefaultIdleNavigationSpanOptions());
    } else {
      obj2 = num(flag[0]);
      beforeStartSpanResult = obj2.getDefaultIdleNavigationSpanOptions();
    }
    const result = startIdleNavigationSpan(beforeStartSpanResult, Object.assign(Object.assign({}, obj2), { isAppRestart: flag }));
    _undefined = result;
    if (null != result) {
      const setAttribute = _undefined.setAttribute;
      const attr = setAttribute(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
    }
    if (null != _undefined) {
      const attr1 = _undefined.setAttribute(num(flag[7]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
    }
    const tmp47 = closure_2;
    if (tmp47) {
      const ignoreEmptyBackNavigation = num(flag[8]).ignoreEmptyBackNavigation;
      num(flag[8]);
      const obj4 = num(flag[2]);
      const result1 = ignoreEmptyBackNavigation(obj4.getClient(), _undefined);
    }
    closure_2 = _undefined;
    const ignoreEmptyRouteChangeTransactions = num(flag[8]).ignoreEmptyRouteChangeTransactions;
    num(flag[8]);
    const obj5 = num(flag[2]);
    const client = obj5.getClient();
    const result2 = ignoreEmptyRouteChangeTransactions(client, _undefined, num(flag[0]).DEFAULT_NAVIGATION_SPAN_NAME, () => c9 === closure_2);
    const tmp58 = c1 && _undefined;
    if (tmp58) {
      const NATIVE = num(flag[1]).NATIVE;
      NATIVE.setActiveSpanId(_undefined.spanContext().spanId);
      const obj9 = { op: "navigation.processing", name: "Navigation dispatch to navigation cancelled or screen mounted", startTime: obj7.spanToJSON(_undefined).start_timestamp };
      const startInactiveSpan = num(flag[2]).startInactiveSpan;
      num(flag[2]);
      obj7 = num(flag[2]);
      const startInactiveSpanResult = startInactiveSpan(obj9);
      c10 = startInactiveSpanResult;
      const setAttribute2 = startInactiveSpanResult.setAttribute;
      setAttribute2(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
    }
    timeout = setTimeout(_discardLatestTransaction, str8);
  };
  updateLatestNavigationSpanWithCurrentRoute = function updateLatestNavigationSpanWithCurrentRoute() {
    let key;
    let name3;
    let obj6;
    _mod681;
    if (current) {
      const currentRoute = obj.getCurrentRoute();
      if (currentRoute) {
        const tmp13 = _undefined;
        if (tmp13) {
          const addTimeToInitialDisplayFallback = _mod1031.addTimeToInitialDisplayFallback;
          _mod1031;
          const spanId = _undefined.spanContext().spanId;
          const NATIVE = tmp(866).NATIVE;
          const result = addTimeToInitialDisplayFallback(spanId, NATIVE.getNewScreenTimeToDisplay());
          if (merged) {
            if (merged.key === currentRoute.key) {
              const debug4 = tmp(681).debug;
              const _HermesInternal6 = HermesInternal;
              debug4.log("[" + ReactNavigation + "] Navigation state changed, but route is the same as previous.");
              if (typeof pushRecentRouteKey === "function") {
                closure_14.push(tmp79);
                if (closure_14.length > 200) {
                  closure_14 = closure_14.slice(closure_14.length - 200);
                }
                merged = currentRoute;
                _undefined = undefined;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          let name = currentRoute.name;
          const hasItem = closure_14.includes(currentRoute.key);
          if (flag5) {
            let state = current.getState();
            let name2;
            if (state) {
              const items = [];
              while (state) {
                let index = state.index;
                let num2 = 0;
                if (null !== index) {
                  num2 = 0;
                  if (undefined !== index) {
                    num2 = index;
                  }
                }
                let tmp28 = state.routes[num2];
                let name1;
                if (null != tmp28) {
                  name1 = tmp28.name;
                }
                if (name1) {
                  let arr4 = items.push(tmp28.name);
                }
                let state1;
                if (null != tmp28) {
                  state1 = tmp28.state;
                }
                state = state1;
              }
              let joined;
              if (items.length > 0) {
                joined = items.join("/");
              }
              name2 = joined;
            }
            if (!name2) {
              name2 = currentRoute.name;
            }
            name = name2;
          }
          if (null != _undefined2) {
            const _HermesInternal4 = HermesInternal;
            _undefined2.updateName("Navigation dispatch to screen " + name + " mounted");
          }
          if (null != _undefined2) {
            const setStatus = _undefined2.setStatus;
            obj2 = { code: _mod681.SPAN_STATUS_OK };
            setStatus(obj2);
          }
          if (null != _undefined2) {
            _undefined2.end(tmp4);
          }
          _undefined2 = undefined;
          const obj3 = _mod681;
          if (obj3.spanToJSON(_undefined).description === DEFAULT_NAVIGATION_SPAN_NAME.DEFAULT_NAVIGATION_SPAN_NAME) {
            _undefined.updateName(name);
          }
          const obj4 = { "route.name": name, "route.key": currentRoute.key, "route.has_been_seen": hasItem, "previous_route.name": name3, "previous_route.key": key };
          name3 = undefined;
          const setAttributes = _undefined.setAttributes;
          if (null != merged) {
            name3 = tmp5.name;
          }
          key = undefined;
          if (null != merged) {
            key = tmp5.key;
          }
          obj4[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
          obj4[_mod681.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          setAttributes(obj4);
          if (typeof clearStateChangeTimeout === "function") {
            if (undefined !== c11) {
              const _clearTimeout = clearTimeout;
              clearTimeout(c11);
              c11 = undefined;
            }
            const _HermesInternal5 = HermesInternal;
            const obj5 = { category: "navigation", type: "navigation", message: "Navigation to " + name, data: obj6 };
            const addBreadcrumb = _mod681.addBreadcrumb;
            _mod681;
            let name4;
            if (null != merged) {
              name4 = tmp5.name;
            }
            obj6 = { from: name4, to: name };
            addBreadcrumb(obj5);
            if (null != reactNativeTracingIntegration) {
              reactNativeTracingIntegration.setCurrentRoute(name);
            }
            if (typeof pushRecentRouteKey === "function") {
              closure_14.push(tmp68);
              if (closure_14.length > 200) {
                closure_14 = closure_14.slice(closure_14.length - 200);
              }
              merged = currentRoute;
              if (flag5) {
                const _Object = Object;
                const _Object2 = Object;
                const obj7 = { name };
                merged = Object.assign(Object.assign({}, currentRoute), obj7);
              }
              _undefined = undefined;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const debug3 = tmp(681).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + ReactNavigation + "] Navigation state changed, but navigation transaction was not started on dispatch.");
        }
      } else {
        const debug2 = tmp(681).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + ReactNavigation + "] Navigation state changed, but no route is rendered.");
      }
    } else {
      const debug = tmp(681).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("" + ReactNavigation + " Missing navigation container ref. Route transactions will not be sent.");
    }
  };
  pushRecentRouteKey = function pushRecentRouteKey(arg0) {

  };
  _discardLatestTransaction = function _discardLatestTransaction() {
    const tmp = _undefined;
    if (tmp) {
      const obj = _mod984;
      if (obj.isSentrySpan(_undefined)) {
        _undefined._sampled = false;
      }
      _undefined.end();
      _undefined = undefined;
    }
    const tmp8 = c10;
    if (tmp8) {
      c10 = undefined;
    }
  };
  clearStateChangeTimeout = function clearStateChangeTimeout() {

  };
  obj2 = {
    name: flag2,
    afterAllSetup(getIntegrationByName) {
      let tmp = require;
      const obj = _mod1028;
      reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(getIntegrationByName);
      const tmp5 = c13;
      if (!tmp5) {
        const tmpResult = _mod1015;
        const appRegistryIntegration = tmpResult.getAppRegistryIntegration(getIntegrationByName);
        const tmp7 = null === appRegistryIntegration || undefined === appRegistryIntegration;
        if (!tmp7) {
          appRegistryIntegration.onRunApplication(() => {
            const tmp = closure_1_13;
            if (tmp) {
              const debug = num(flag[2]).debug;
              debug.log("[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.");
              startIdleNavigationSpan(undefined, true);
            }
          });
        }
        startIdleNavigationSpan();
        const tmp11 = current;
        if (tmp11) {
          updateLatestNavigationSpanWithCurrentRoute();
          flag = true;
          c13 = true;
        }
      }
    },
    registerNavigationContainer(navigationContainerRef) {
      if (RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
        const debug = tmp(681).debug;
        const _HermesInternal = HermesInternal;
        debug.log("" + ReactNavigation + " Instrumentation already exists, but registering again...");
      }
      current = navigationContainerRef;
      const tmpResult = _mod681;
      if (tmpResult.isPlainObject(navigationContainerRef)) {
        current = navigationContainerRef;
        if ("current" in navigationContainerRef) {
          current = navigationContainerRef.current;
        }
      }
      if (current !== current) {
        if (current) {
          current.addListener("__unsafe_action__", startIdleNavigationSpan);
          current.addListener("state", updateLatestNavigationSpanWithCurrentRoute);
          RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
          const tmp15 = updateLatestNavigationSpanWithCurrentRoute;
          const tmp17 = c13;
          if (!tmp17) {
            const tmp18 = c9;
            if (tmp18) {
              tmp15();
              c13 = true;
            } else {
              const debug4 = tmp(681).debug;
              const _HermesInternal4 = HermesInternal;
              debug4.log("" + ReactNavigation + " Navigation container registered, but integration has not been setup yet.");
            }
          }
        } else {
          const debug3 = tmp(681).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.warn("" + ReactNavigation + " Received invalid navigation container ref!");
        }
      } else {
        const debug2 = tmp(681).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("" + ReactNavigation + " Navigation container ref is the same as the one already registered.");
      }
    },
    options: { routeChangeTimeoutMs: num, enableTimeToInitialDisplay: flag, ignoreEmptyBackNavigationTransactions: flag2, enableTimeToInitialDisplayForPreloadedRoutes: flag3, useDispatchedActionData: flag4, useFullPathsForNavigationRoutes: flag5, enablePrefetchTracking: flag6 }
  };
  return obj2;
};
export function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNavigation);
}
