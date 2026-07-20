// Module ID: 1510
// Function ID: 17351
// Name: isValidKey
// Dependencies: []
// Exports: default

// Module 1510 (isValidKey)
let closure_3 = [null, "5"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importAll(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const PrivateValueStore = arg1(dependencyMap[6]).PrivateValueStore;
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
function getRouteConfigsFromChildren(children) {
  const importDefault = arg2;
  const Children = React.Children;
  return Children.toArray(children).reduce((arr, type) => {
    if (React.isValidElement(type)) {
      if (type.type === arg2(closure_2[7])) {
        if (callback2(type.props.navigationKey)) {
          const obj = {};
          const items = [type, type.props.navigationKey];
          obj.keys = items;
          obj.options = arg2;
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
      } else if (callback2(type.props.navigationKey)) {
        const push = arr.push;
        if (type.type !== arg2(closure_2[8])) {
          let combined = arg2;
        } else if (null != arg2) {
          const items1 = [];
          const items2 = [type.props.screenOptions];
          combined = items1.concat(callback(arg2), items2);
        } else {
          combined = [type.props.screenOptions];
        }
        push.apply(arr, callback(closure_11(type.props.children, type.props.navigationKey, combined)));
        return arr;
      } else {
        const _Error = Error;
        const _JSON2 = JSON;
        const _HermesInternal4 = HermesInternal;
        const error1 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(type.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
        throw error1;
      }
    }
    if (React.isValidElement(type)) {
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
  let callback = importDefault(dependencyMap[9])();
  const context = React.useContext(importDefault(dependencyMap[10]));
  const importDefault = context;
  const dependencyMap = screenListeners.screenListeners;
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
  const current = React.useRef(StackRouter(Object.assign({}, callback3(screenListeners, closure_3), tmp4))).current;
  closure_3 = current;
  const arr = getRouteConfigsFromChildren(screenListeners.children);
  const reduced = arr.reduce((arg0, props) => {
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
  let callback2 = reduced;
  const mapped = arr.map((props) => props.props.name);
  let closure_5 = mapped;
  const reduced1 = mapped.reduce((arg0, arg1) => {
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
  let callback3 = reduced1;
  const reduced2 = mapped.reduce((arg0, arg1) => {
    arg0[arg1] = reduced[arg1].props.initialParams;
    return arg0;
  }, {});
  const reduced3 = mapped.reduce((arg0, arg1) => Object.assign(arg0, mapped({}, arg1, reduced[arg1].props.getId)), {});
  let closure_7 = reduced3;
  if (mapped.length) {
    const items = [current.type];
    callback = React.useCallback((type) => {
      let tmp = undefined === type.type;
      if (!tmp) {
        tmp = type.type === current.type;
      }
      return tmp;
    }, items);
    const React = callback;
    const items1 = [callback];
    const callback1 = React.useCallback((stale) => {
      let tmp = undefined !== stale;
      if (tmp) {
        tmp = false === stale.stale;
      }
      if (tmp) {
        tmp = callback(stale);
      }
      return tmp;
    }, items1);
    const jsx = callback1;
    const context1 = React.useContext(importDefault(dependencyMap[11]));
    const state = context1.state;
    const isValidKey = state;
    const getState = context1.getState;
    const getRouteConfigsFromChildren = getState;
    const setState = context1.setState;
    ({ setKey: closure_13, getKey: closure_14, getIsInitial: closure_15 } = context1);
    let closure_16 = React.useRef(false);
    const items2 = [setState];
    let closure_17 = React.useCallback(() => {
      setState(undefined);
      closure_16.current = true;
    }, items2);
    const items3 = [setState];
    callback2 = React.useCallback((arg0) => {
      if (!ref.current) {
        setState(arg0);
      }
    }, items3);
    const items4 = [state, current, callback];
    const tmp21 = callback2(React.useMemo(() => {
      const reduced = mapped.reduce((arg0, arg1) => {
        const initialParams = closure_4[arg1].props.initialParams;
        let state;
        if (null != closure_1) {
          const params = closure_1.params;
          if (null != params) {
            state = params.state;
          }
        }
        if (null == state) {
          let initial;
          if (null != closure_1) {
            const params3 = closure_1.params;
            if (null != params3) {
              initial = params3.initial;
            }
          }
          if (false !== initial) {
            let screen;
            if (null != closure_1) {
              const params4 = closure_1.params;
              if (null != params4) {
                screen = params4.screen;
              }
            }
            if (screen === arg1) {
              const params2 = closure_1.params.params;
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
        let state;
        if (null != context) {
          const params = context.params;
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
        const params2 = context.params;
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
    const ref = React.useRef(reduced1);
    const effect = React.useEffect(() => {
      ref.current = reduced1;
    });
    const current2 = ref.current;
    let tmp25 = first;
    if (callback1(state)) {
      tmp25 = state;
    }
    let tmp39 = tmp25;
    let rehydratedState = tmp25;
    let tmp28 = importDefault(dependencyMap[12])(tmp25.routeNames, mapped);
    if (tmp28) {
      tmp28 = importDefault(dependencyMap[13])(reduced1, current2);
    }
    rehydratedState = tmp25;
    if (!tmp28) {
      obj = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
      const _Object = Object;
      const keys = Object.keys(reduced1);
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
    const ref1 = React.useRef(params);
    let params1;
    if (null != context) {
      params1 = context.params;
    }
    const items5 = [params1];
    const effect1 = React.useEffect(() => {
      let params;
      if (null != context) {
        params = context.params;
      }
      ref1.current = params;
    }, items5);
    tmp39 = rehydratedState;
    if (null != context) {
      tmp39 = rehydratedState;
      if (context.params) {
        const current3 = ref1.current;
        if ("object" === typeof context.params.state) {
          if (null != context.params.state) {
            if (context.params !== current3) {
              const CommonActions2 = callback(dependencyMap[14]).CommonActions;
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
          const CommonActions = callback(dependencyMap[14]).CommonActions;
          const obj2 = { name: context.params.screen, params: context.params.params, path: context.params.path };
          resetResult = CommonActions.navigate(obj2);
        }
      }
    }
    let closure_24 = tmp25 !== tmp39;
    importDefault(dependencyMap[15])(() => {
      if (closure_24) {
        callback2(rehydratedState);
      }
    });
    const effect2 = React.useEffect(() => {
      callback(closure_0);
      if (!callback2()) {
        callback2(rehydratedState);
      }
      return () => {
        const timerId = setTimeout(() => {
          let tmp = undefined !== callback();
          if (tmp) {
            tmp = callback2() === closure_0;
          }
          if (tmp) {
            callback3();
          }
        }, 0);
      };
    }, []);
    const ref2 = React.useRef();
    ref2.current = first;
    const items6 = [getState, callback1];
    callback3 = React.useCallback(() => {
      let current = getState();
      if (!callback1(current)) {
        current = ref2.current;
      }
      return current;
    }, items6);
    const tmp55 = importDefault(dependencyMap[16])((target) => {
      let closure_0 = target;
      const items = [];
      const routes = tmp39.routes;
      if (target.target) {
        const found = routes.find((key) => key.key === key.target);
        let closure_1 = found;
        let tmp2 = found;
        if (tmp9) {
          items.push(found.name);
          tmp2 = found;
        }
        const tmp9 = null != found && found.name;
      } else {
        closure_1 = routes[closure_21.index];
        const push = items.push;
        const _Object = Object;
        const keys = Object.keys(reduced);
        push.apply(items, reduced3(keys.filter((arg0) => {
          let name;
          if (null != name) {
            name = name.name;
          }
          return name === arg0;
        })));
      }
      if (null != tmp2) {
        const screenListeners = tmp73[tmp2.key].navigation;
        const items1 = [];
        const concat = items1.concat;
        const items2 = [screenListeners];
        const combined = items2.concat(reduced3(items.map((arg0) => closure_4[arg0].props.listeners)));
        const found1 = concat.apply(items1, reduced3(combined.map((arg0) => {
          let tmp = arg0;
          if ("function" === typeof arg0) {
            const obj = { route: closure_1, navigation };
            tmp = arg0(obj);
          }
          arg0 = tmp;
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
            tmp = arg0(arg0);
          }
          return tmp;
        });
        const applyResult1 = concat.apply(items1, reduced3(combined.map((arg0) => {
          let tmp = arg0;
          if ("function" === typeof arg0) {
            const obj = { route: closure_1, navigation };
            tmp = arg0(obj);
          }
          arg0 = tmp;
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
    const obj3 = { state: tmp39, emitter: tmp55 };
    importDefault(dependencyMap[17])(obj3);
    const items7 = [tmp55, tmp39];
    const effect3 = React.useEffect(() => {
      tmp55.emit({ type: "state", data: { state: tmp39 } });
    }, items7);
    const tmp58 = importDefault(dependencyMap[18])();
    const listeners = tmp58.listeners;
    const tmp59 = importDefault(dependencyMap[19])();
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
    const tmp60Result = importDefault(dependencyMap[20])(obj4);
    const obj6 = { router: current };
    let key1;
    const tmp60 = importDefault(dependencyMap[20]);
    if (null != context) {
      key1 = context.key;
    }
    obj6.key = key1;
    obj6.getState = callback3;
    obj6.setState = callback2;
    const tmp65 = importDefault(dependencyMap[21]);
    const obj7 = { id: screenListeners.id, onAction: tmp60Result, getState: callback3, emitter: tmp55, router: current };
    const tmp70 = importDefault(dependencyMap[22])(obj7);
    const obj8 = { navigation: tmp70, focusedListeners: listeners.focus };
    importDefault(dependencyMap[23])(obj8);
    const obj9 = { getState: callback3, getStateListeners: keyedListeners.getState };
    importDefault(dependencyMap[24])(obj9);
    const obj10 = { state: tmp39, screens: reduced, navigation: tmp70 };
    ({ screenOptions: obj13.screenOptions, defaultScreenOptions: obj13.defaultScreenOptions } = screenListeners);
    obj10.onAction = tmp60Result;
    obj10.getState = callback3;
    obj10.setState = callback2;
    obj10.onRouteFocus = importDefault(dependencyMap[21])(obj6);
    obj10.addListener = tmp58.addListener;
    obj10.addKeyedListener = tmp59.addKeyedListener;
    obj10.router = current;
    obj10.emitter = tmp55;
    const tmp73 = importDefault(dependencyMap[25])(obj10);
    const obj11 = { state: tmp39, navigation: tmp70, descriptors: tmp73 };
    importDefault(dependencyMap[26])(obj11);
    const obj12 = {
      state: tmp39,
      navigation: tmp70,
      descriptors: tmp73,
      NavigationContent: importDefault(dependencyMap[27])((children) => {
          let obj = { value: tmp70 };
          obj = { children };
          obj.children = callback1(context(screenListeners[29]), obj);
          return callback1(context(screenListeners[28]).Provider, obj);
        })
    };
    return obj12;
  } else {
    const _Error = Error;
    const error = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error;
  }
  const tmp3 = callback3(screenListeners, closure_3);
};
