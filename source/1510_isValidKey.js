// Module ID: 1510
// Function ID: 17358
// Name: isValidKey
// Dependencies: [57, 77, 29, 65, 31, 33, 1460, 1487, 1486, 1511, 1483, 1470, 1512, 1513, 1461, 1480, 1476, 1514, 1472, 1473, 1515, 1517, 1518, 1519, 1520, 1521, 1525, 1526, 1502, 1504]
// Exports: default

// Module 1510 (isValidKey)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";
import transformPreventedRoutes from "transformPreventedRoutes";
import _toConsumableArray from "_toConsumableArray";
import result from "result";
import { jsx } from "jsxProd";
import { PrivateValueStore } from "PrivateValueStore";

const require = arg1;
let closure_3 = ["children", "screenListeners"];
function isValidKey(arg0) {
  let tmp = undefined === arg0;
  if (!tmp) {
    let tmp2 = "string" === typeof arg0;
    if (tmp2) {
      tmp2 = "" !== arg0;
    }
    tmp = tmp2;
  }
  return tmp;
}
function getRouteConfigsFromChildren(arg0, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const Children = React.Children;
  return Children.toArray(arg0).reduce((arr, type) => {
    if (outer1_8.isValidElement(type)) {
      if (type.type === callback(outer1_2[7])) {
        if (outer1_10(type.props.navigationKey)) {
          const obj = {};
          const items = [closure_0, type.props.navigationKey];
          obj.keys = items;
          obj.options = callback;
          obj.props = type.props;
          arr.push(obj);
          return arr;
        } else {
          const _Error2 = Error;
          const _JSON3 = JSON;
          const _HermesInternal5 = HermesInternal;
          const error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the screen '" + type.props.name + "'. It must be a non-empty string or 'undefined'.");
          throw error;
        }
      } else if (outer1_10(type.props.navigationKey)) {
        const push = arr.push;
        if (type.type !== callback(outer1_2[8])) {
          let combined = callback;
        } else if (null != callback) {
          const items1 = [];
          const items2 = [type.props.screenOptions];
          combined = items1.concat(outer1_7(callback), items2);
        } else {
          combined = [type.props.screenOptions];
        }
        push.apply(arr, outer1_7(outer1_11(type.props.children, type.props.navigationKey, combined)));
        return arr;
      } else {
        const _Error = Error;
        const _JSON2 = JSON;
        const _HermesInternal4 = HermesInternal;
        const error1 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
        throw error1;
      }
    }
    if (outer1_8.isValidElement(type)) {
      if ("string" === typeof type.type) {
        let name = type.type;
      } else {
        type = type.type;
        if (null != type) {
          name = type.name;
        }
      }
      let str5 = "";
      if (null != type.props) {
        str5 = "";
        if ("object" === typeof type.props) {
          str5 = "";
          if ("name" in type.props) {
            const props = type.props;
            str5 = "";
            if (null != props) {
              str5 = "";
              if (props.name) {
                const _HermesInternal2 = HermesInternal;
                str5 = " for the screen '" + type.props.name + "'";
              }
            }
          }
        }
      }
      const _HermesInternal3 = HermesInternal;
      let combined1 = "'" + name + "'" + str5;
    } else if ("object" === typeof type) {
      const _JSON = JSON;
      combined1 = JSON.stringify(type);
    } else {
      const _String = String;
      const _HermesInternal = HermesInternal;
      combined1 = "'" + String(type) + "'";
    }
    const error2 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined1 + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
    throw error2;
  }, []);
}

export default function useNavigationBuilder(StackRouter, screenListeners) {
  let closure_13;
  let closure_14;
  let closure_15;
  const _require = context(screenListeners[9])();
  context = callback.useContext(context(screenListeners[10]));
  screenListeners = screenListeners.screenListeners;
  let tmp4 = null;
  if (null != context) {
    tmp4 = null;
    if (context.params) {
      tmp4 = null;
      if (null == context.params.state) {
        tmp4 = null;
        if (false !== context.params.initial) {
          tmp4 = null;
          if ("string" === typeof context.params.screen) {
            let obj = { initialRouteName: context.params.screen };
            tmp4 = obj;
          }
        }
      }
    }
  }
  current = callback.useRef(StackRouter(Object.assign({}, reduced1(screenListeners, current), tmp4))).current;
  const arr = getState(screenListeners.children);
  let reduced = arr.reduce((arg0, props) => {
    if (props.props.name in arg0) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + props.props.name + "')");
      throw error;
    } else {
      arg0[props.props.name] = props;
      return arg0;
    }
  }, {});
  let mapped = arr.map((props) => props.props.name);
  reduced1 = mapped.reduce((arg0, arg1) => {
    const keys = reduced[arg1].keys;
    const mapped = keys.map((arg0) => {
      let str = "";
      if (null != arg0) {
        str = arg0;
      }
      return str;
    });
    arg0[arg1] = mapped.join(":");
    return arg0;
  }, {});
  const reduced2 = mapped.reduce((arg0, arg1) => {
    arg0[arg1] = reduced[arg1].props.initialParams;
    return arg0;
  }, {});
  const reduced3 = mapped.reduce((arg0, arg1) => Object.assign(arg0, mapped({}, arg1, reduced[arg1].props.getId)), {});
  if (mapped.length) {
    let items = [current.type];
    callback = callback.useCallback((type) => {
      let tmp = undefined === type.type;
      if (!tmp) {
        tmp = type.type === current.type;
      }
      return tmp;
    }, items);
    let items1 = [callback];
    const callback1 = callback.useCallback((stale) => {
      let tmp = undefined !== stale;
      if (tmp) {
        tmp = false === stale.stale;
      }
      if (tmp) {
        tmp = callback(stale);
      }
      return tmp;
    }, items1);
    const context1 = callback.useContext(context(screenListeners[11]));
    let state = context1.state;
    getState = context1.getState;
    const setState = context1.setState;
    ({ setKey: closure_13, getKey: closure_14, getIsInitial: closure_15 } = context1);
    let closure_16 = callback.useRef(false);
    let items2 = [setState];
    let closure_17 = callback.useCallback(() => {
      setState(undefined);
      closure_16.current = true;
    }, items2);
    const items3 = [setState];
    const callback2 = callback.useCallback((arg0) => {
      if (!ref.current) {
        setState(arg0);
      }
    }, items3);
    const items4 = [state, current, callback];
    const tmp21 = reduced(callback.useMemo(() => {
      const reduced = mapped.reduce((arg0, arg1) => {
        const initialParams = outer1_4[arg1].props.initialParams;
        let state;
        if (null != outer1_1) {
          const params = outer1_1.params;
          if (null != params) {
            state = params.state;
          }
        }
        if (null == state) {
          let initial;
          if (null != outer1_1) {
            const params3 = outer1_1.params;
            if (null != params3) {
              initial = params3.initial;
            }
          }
          if (false !== initial) {
            let screen;
            if (null != outer1_1) {
              const params4 = outer1_1.params;
              if (null != params4) {
                screen = params4.screen;
              }
            }
            if (screen === arg1) {
              const params2 = outer1_1.params.params;
            }
          }
        }
        if (undefined !== initialParams) {
          const _Object = Object;
          const merged = Object.assign({}, initialParams, params2);
        }
        arg0[arg1] = merged;
        return arg0;
      }, {});
      if (undefined === state) {
        state = undefined;
        if (null != context) {
          let params = context.params;
          if (null != params) {
            state = params.state;
          }
        }
        if (null == state) {
          let obj = { routeNames: mapped, routeParamList: reduced, routeGetIdList: reduced3 };
          let items = [current.getInitialState(obj), true];
        }
        return items;
      }
      let state1;
      if (null != context) {
        let params2 = context.params;
        if (null != params2) {
          state1 = params2.state;
        }
      }
      if (null == state1) {
        state1 = state;
      }
      obj = { routeNames: mapped, routeParamList: reduced, routeGetIdList: reduced3 };
      const items1 = [current.getRehydratedState(state1, obj), false];
      items = items1;
    }, items4), 2);
    const first = tmp21[0];
    const ref = callback.useRef(reduced1);
    const effect = callback.useEffect(() => {
      ref.current = reduced1;
    });
    const current2 = ref.current;
    let tmp25 = first;
    if (callback1(state)) {
      tmp25 = state;
    }
    let closure_21 = tmp25;
    let rehydratedState = tmp25;
    let tmp28 = context(screenListeners[12])(tmp25.routeNames, mapped);
    if (tmp28) {
      tmp28 = context(screenListeners[13])(reduced1, current2);
    }
    rehydratedState = tmp25;
    if (!tmp28) {
      obj = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
      let _Object = Object;
      let keys = Object.keys(reduced1);
      obj.routeKeyChanges = keys.filter((arg0) => {
        let hasOwnPropertyResult = current2.hasOwnProperty(arg0);
        if (hasOwnPropertyResult) {
          hasOwnPropertyResult = reduced1[arg0] !== current2[arg0];
        }
        return hasOwnPropertyResult;
      });
      const stateForRouteNamesChange = current.getStateForRouteNamesChange(tmp25, obj);
      rehydratedState = stateForRouteNamesChange;
      rehydratedState = stateForRouteNamesChange;
    }
    let params;
    if (null != context) {
      params = context.params;
    }
    const ref1 = callback.useRef(params);
    let params1;
    if (null != context) {
      params1 = context.params;
    }
    const items5 = [params1];
    const effect1 = callback.useEffect(() => {
      let params;
      if (null != context) {
        params = context.params;
      }
      ref1.current = params;
    }, items5);
    let tmp39 = rehydratedState;
    if (null != context) {
      tmp39 = rehydratedState;
      if (context.params) {
        const current3 = ref1.current;
        if ("object" === typeof context.params.state) {
          if (null != context.params.state) {
            if (context.params !== current3) {
              const CommonActions2 = _require(screenListeners[14]).CommonActions;
              let resetResult = CommonActions2.reset(context.params.state);
            }
            let stateForAction = null;
            if (resetResult) {
              obj = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
              stateForAction = current.getStateForAction(rehydratedState, resetResult, obj);
            }
            if (null !== stateForAction) {
              const obj1 = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
              rehydratedState = current.getRehydratedState(stateForAction, obj1);
            }
            tmp39 = rehydratedState;
          }
        }
        let tmp40 = "string" === typeof context.params.screen;
        if (tmp40) {
          tmp40 = false === context.params.initial && tmp21[1] || context.params !== current3;
          const tmp41 = false === context.params.initial && tmp21[1] || context.params !== current3;
        }
        if (tmp40) {
          const CommonActions = _require(screenListeners[14]).CommonActions;
          const obj2 = { name: context.params.screen, params: context.params.params, path: context.params.path };
          resetResult = CommonActions.navigate(obj2);
        }
      }
    }
    let closure_24 = tmp25 !== tmp39;
    context(screenListeners[15])(() => {
      if (closure_24) {
        callback2(rehydratedState);
      }
    });
    closure_21 = tmp39;
    const effect2 = callback.useEffect(() => {
      callback(closure_0);
      if (!callback2()) {
        callback2(rehydratedState);
      }
      return () => {
        const timerId = setTimeout(() => {
          let tmp = undefined !== outer2_11();
          if (tmp) {
            tmp = outer2_14() === outer2_0;
          }
          if (tmp) {
            outer2_17();
          }
        }, 0);
      };
    }, []);
    const ref2 = callback.useRef();
    ref2.current = first;
    const items6 = [getState, callback1];
    const callback3 = callback.useCallback(() => {
      let current = getState();
      if (!callback1(current)) {
        current = ref2.current;
      }
      return current;
    }, items6);
    const tmp55 = context(screenListeners[16])((target) => {
      let closure_0 = target;
      const items = [];
      const routes = tmp39.routes;
      if (target.target) {
        let found = routes.find((key) => key.key === target.target);
        let closure_1 = found;
        let tmp2 = found;
        if (tmp9) {
          items.push(found.name);
          tmp2 = found;
        }
        tmp9 = null != found && found.name;
      } else {
        closure_1 = routes[tmp39.index];
        const push = items.push;
        let _Object = Object;
        let keys = Object.keys(reduced);
        push.apply(items, reduced3(keys.filter((arg0) => {
          let name;
          if (null != name) {
            name = name.name;
          }
          return name === arg0;
        })));
      }
      if (null != tmp2) {
        const navigation = tmp73[tmp2.key].navigation;
        const items1 = [];
        const concat = items1.concat;
        const items2 = [navigation];
        const combined = items2.concat(reduced3(items.map((arg0) => outer1_4[arg0].props.listeners)));
        const found1 = concat.apply(items1, reduced3(combined.map((arg0) => {
          let tmp = arg0;
          if ("function" === typeof arg0) {
            const obj = { route: closure_1, navigation };
            tmp = arg0(obj);
          }
          let closure_0 = tmp;
          let mapped;
          if (tmp) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const found = keys.filter((arg0) => arg0 === tmp.type);
            mapped = found.map((arg0) => {
              let tmp;
              if (null != tmp) {
                tmp = tmp[arg0];
              }
              return tmp;
            });
          }
          return mapped;
        }))).filter((arg0, arg1, arr) => {
          let tmp = arg0;
          if (arg0) {
            tmp = arr.lastIndexOf(arg0) === arg1;
          }
          return tmp;
        });
        const item = found1.forEach((arg0) => {
          let tmp;
          if (null != arg0) {
            tmp = arg0(closure_0);
          }
          return tmp;
        });
        const applyResult1 = concat.apply(items1, reduced3(combined.map((arg0) => {
          let tmp = arg0;
          if ("function" === typeof arg0) {
            const obj = { route: closure_1, navigation };
            tmp = arg0(obj);
          }
          let closure_0 = tmp;
          let mapped;
          if (tmp) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const found = keys.filter((arg0) => arg0 === tmp.type);
            mapped = found.map((arg0) => {
              let tmp;
              if (null != tmp) {
                tmp = tmp[arg0];
              }
              return tmp;
            });
          }
          return mapped;
        })));
      }
    });
    let closure_26 = tmp55;
    const obj3 = { state: tmp39, emitter: tmp55 };
    context(screenListeners[17])(obj3);
    const items7 = [tmp55, tmp39];
    const effect3 = callback.useEffect(() => {
      tmp55.emit({ type: "state", data: { state: closure_21 } });
    }, items7);
    const tmp58 = context(screenListeners[18])();
    const listeners = tmp58.listeners;
    const tmp59 = context(screenListeners[19])();
    const keyedListeners = tmp59.keyedListeners;
    const obj4 = { router: current, getState: callback3, setState: callback2 };
    let key;
    if (null != context) {
      key = context.key;
    }
    obj4.key = key;
    obj4.actionListeners = listeners.action;
    obj4.beforeRemoveListeners = keyedListeners.beforeRemove;
    const obj5 = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
    obj4.routerConfigOptions = obj5;
    obj4.emitter = tmp55;
    const tmp60Result = context(screenListeners[20])(obj4);
    const obj6 = { router: current };
    let key1;
    const tmp60 = context(screenListeners[20]);
    if (null != context) {
      key1 = context.key;
    }
    obj6.key = key1;
    obj6.getState = callback3;
    obj6.setState = callback2;
    const tmp65 = context(screenListeners[21]);
    const obj7 = { id: screenListeners.id, onAction: tmp60Result, getState: callback3, emitter: tmp55, router: current };
    const tmp70 = context(screenListeners[22])(obj7);
    let closure_27 = tmp70;
    const obj8 = { navigation: tmp70, focusedListeners: listeners.focus };
    context(screenListeners[23])(obj8);
    const obj9 = { getState: callback3, getStateListeners: keyedListeners.getState };
    context(screenListeners[24])(obj9);
    const obj10 = { state: tmp39, screens: reduced, navigation: tmp70 };
    ({ screenOptions: obj13.screenOptions, defaultScreenOptions: obj13.defaultScreenOptions } = screenListeners);
    obj10.onAction = tmp60Result;
    obj10.getState = callback3;
    obj10.setState = callback2;
    obj10.onRouteFocus = context(screenListeners[21])(obj6);
    obj10.addListener = tmp58.addListener;
    obj10.addKeyedListener = tmp59.addKeyedListener;
    obj10.router = current;
    obj10.emitter = tmp55;
    const tmp73 = context(screenListeners[25])(obj10);
    let closure_28 = tmp73;
    const obj11 = { state: tmp39, navigation: tmp70, descriptors: tmp73 };
    context(screenListeners[26])(obj11);
    const obj12 = {
      state: tmp39,
      navigation: tmp70,
      descriptors: tmp73,
      NavigationContent: context(screenListeners[27])((children) => {
          let obj = { value: closure_27 };
          obj = { children };
          obj.children = callback1(context(screenListeners[29]), obj);
          return callback1(context(screenListeners[28]).Provider, obj);
        })
    };
    return obj12;
  } else {
    let _Error = Error;
    let error = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error;
  }
  const tmp3 = reduced1(screenListeners, current);
};
