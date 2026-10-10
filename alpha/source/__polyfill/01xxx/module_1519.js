// Module ID: 1519
// Function ID: 1520
// Dependencies: [109, 19, 21, 1520, 1521, 1523, 1526, 1527, 1528, 1525, 1529, 1508, 1530, 1531, 1532, 1522, 1534, 1533, 1535, 1536, 1537, 1538, 1539]

// Module 1519
import Fragment from "Fragment" /* 21 */;
import CommonActions2 from "CommonActions" /* 1508 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1529 */;
import findFocusedRoute from "findFocusedRoute" /* 1530 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

const require = globalThis.__r;

let closure_3 = ["key", "routeNames"];
const jsx = Fragment.jsx;
function getPartialState(arg0) {

}

export const BaseNavigationContainer = react.forwardRef(function BaseNavigationContainer(onReady, ref) {
  let EnsureSingleNavigator;
  let Provider3;
  let Provider4;
  let Provider5;
  let Provider6;
  let Provider7;
  let _undefined;
  let _undefined2;
  let addKeyedListener;
  let addListener;
  let c12;
  let c14;
  let children;
  let navigationInChildEnabled;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let onStateChange;
  let onUnhandledAction;
  let theme;
  ({ initialState: require, onStateChange } = onReady);
  onReady = onReady.onReady;
  ({ onUnhandledAction, navigationInChildEnabled } = onReady);
  if (navigationInChildEnabled === undefined) {
    navigationInChildEnabled = false;
  }
  let state;
  let getState;
  let setState;
  let scheduleUpdate;
  let flushUpdates;
  ref = undefined;
  let ref2;
  let getKey;
  let callback1;
  c12 = undefined;
  addListener = undefined;
  c14 = undefined;
  addKeyedListener = undefined;
  let dispatch;
  let canGoBack;
  let resetRoot;
  let getRootState;
  let getCurrentRoute;
  let isReady;
  let eventEmitter;
  let addOptionsGetter;
  let getCurrentOptions;
  let memo;
  let onDispatchAction;
  let onEmitEvent;
  let ref3;
  let onOptionsChange;
  let stackRef;
  let ref4;
  let getIsStateEmitted;
  let ref5;
  let callback2;
  let ref6;
  let ref7;
  let ref8;
  let obj = setState;
  let tmp = require;
  let tmp2 = onReady;
  ({ theme, children } = onReady);
  const context = setState.useContext(require("react").NavigationStateContext);
  let obj2 = require("react");
  if (!context.isDefault) {
    if (!obj2.useNavigationIndependentTree()) {
      const tmp4 = globalThis;
      const _Error = Error;
      const self = this;
      const str = "Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, wrap the container in 'NavigationIndependentTree' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.";
      const self2 = this;
      let error = new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, wrap the container in 'NavigationIndependentTree' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
      throw error;
    }
  }
  const tmpResult = tmp(tmp2[5]);
  const syncState = tmpResult.useSyncState(() => {
    let key;
    let routeNames;
    let routes;
    let tmp2;
    const f85632 = (state) => {
      let key;
      let routeNames;
      let routes;
      let tmp = state;
      if (undefined !== state.state) {
        const obj2 = {};
        const merged = Object.assign(state);
        state = state.state;
        if (typeof flushUpdates === "function") {
          let tmp2;
          if (undefined !== state) {
            ({ key, routeNames } = state);
            const obj = { stale: true, routes: routes.map(f85632) };
            const merged1 = Object.assign(getState(state, closure_1_3));
            routes = state.routes;
            tmp2 = obj;
          }
          obj2.state = tmp2;
          tmp = obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp;
    };
    let tmp = getPartialState;
    if (null != require) {
      tmp2 = require;
    }
    if (typeof tmp === "function") {
      let tmp3;
      if (undefined !== tmp2) {
        ({ key, routeNames } = tmp2);
        let obj = { stale: true, routes: routes.map(f85632) };
        let merged = Object.assign(_objectWithoutProperties(tmp2, closure_3));
        routes = tmp2.routes;
        tmp3 = obj;
      }
      return tmp3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  state = syncState.state;
  getState = syncState.getState;
  setState = syncState.setState;
  scheduleUpdate = syncState.scheduleUpdate;
  flushUpdates = syncState.flushUpdates;
  const tmpResult6 = tmp(tmp2[6]);
  const lazyValue = tmpResult6.useLazyValue(() => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  ref = obj.useRef(true);
  ref2 = obj.useRef(undefined);
  getKey = obj.useCallback(() => ref2.current, []);
  callback1 = obj.useCallback((current) => {
    ref2.current = current;
  }, []);
  const tmpResult7 = tmp(tmp2[7]);
  const childListeners = tmpResult7.useChildListeners();
  ({ listeners: c12, addListener } = childListeners);
  const tmpResult8 = tmp(tmp2[8]);
  const keyedChildListeners = tmpResult8.useKeyedChildListeners();
  ({ keyedListeners: c14, addKeyedListener } = keyedChildListeners);
  const tmp13 = onStateChange(tmp2[9])((arg0) => {
    let closure_0 = arg0;
    if (null == _undefined.focus[0]) {
      const _console = console;
      console.error(NOT_INITIALIZED_ERROR.NOT_INITIALIZED_ERROR);
    } else {
      const focus = tmp.focus;
      focus[0]((dispatch) => dispatch.dispatch(closure_0));
    }
  });
  dispatch = tmp13;
  const tmp14 = onStateChange(tmp2[9])(() => {
    if (null == _undefined.focus[0]) {
      return false;
    } else {
      const focus = tmp.focus;
      const tmp2 = focus[0]((canGoBack) => canGoBack.canGoBack());
      return tmp2.handled && tmp2.result;
    }
  });
  canGoBack = tmp14;
  const tmp15 = onStateChange(tmp2[9])((key) => {
    let closure_0 = key;
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (key == null) {
      getState = _undefined2.getState;
      const root = getState.root;
      let key1;
      if (root != null) {
        key1 = root().key;
      }
      key = key1;
    }
    if (null == key) {
      const _console = console;
      console.error(NOT_INITIALIZED_ERROR.NOT_INITIALIZED_ERROR);
    } else {
      const focus = _undefined.focus;
      focus[0]((dispatch) => {
        dispatch = dispatch.dispatch;
        const obj = { target: key };
        const CommonActions = closure_2_0(onReady[11]).CommonActions;
        const merged = Object.assign(CommonActions.reset(closure_0));
        return dispatch(obj);
      });
    }
  });
  resetRoot = tmp15;
  const tmp16 = onStateChange(tmp2[9])(() => {
    getState = _undefined2.getState;
    const root = getState.root;
    let rootResult;
    if (root != null) {
      rootResult = root();
    }
    return rootResult;
  });
  getRootState = tmp16;
  const tmp17 = onStateChange(tmp2[9])(() => {
    const tmp = getRootState();
    if (null != tmp) {
      const obj = findFocusedRoute;
      return obj.findFocusedRoute(tmp);
    }
  });
  getCurrentRoute = tmp17;
  const tmp18 = onStateChange(tmp2[9])(() => null != _undefined.focus[0]);
  isReady = tmp18;
  const tmpResult9 = tmp(tmp2[13]);
  eventEmitter = tmpResult9.useEventEmitter();
  const tmpResult10 = tmp(tmp2[14]);
  const optionsGetters = tmpResult10.useOptionsGetters({});
  addOptionsGetter = optionsGetters.addOptionsGetter;
  getCurrentOptions = optionsGetters.getCurrentOptions;
  let items = [tmp14, tmp13, eventEmitter, getCurrentOptions, tmp17, tmp16, getState, tmp18, tmp15];
  memo = obj.useMemo(() => {
    const obj = {
      dispatch,
      resetRoot,
      isFocused() {
        return true;
      },
      canGoBack,
      getParent() {

      },
      getState,
      getRootState,
      getCurrentRoute,
      getCurrentOptions,
      isReady,
      setOptions() {
        const error = new Error("Cannot call setOptions outside a screen");
        throw error;
      }
    };
    const keys = Object.keys(CommonActions2.CommonActions);
    const merged = Object.assign(keys.reduce((acc, item) => {
      let closure_0 = item;
      acc[item] = () => {
        const items = [...arguments];
        const CommonActions = require("CommonActions").CommonActions;
        const items1 = [...items];
        return dispatch(CommonActions[item].apply(items1));
      };
      return acc;
    }, {}));
    const merged1 = Object.assign(eventEmitter.create("root"));
    return obj;
  }, items);
  let items1 = [memo];
  const imperativeHandle = obj.useImperativeHandle(ref, () => memo, items1);
  const tmp23 = onStateChange(tmp2[9])((action, noop) => {
    let obj2;
    const obj = { type: "__unsafe_action__", data: obj2 };
    obj2 = { action, noop, stack: stackRef.current };
    eventEmitter.emit(obj);
  });
  onDispatchAction = tmp23;
  const tmp24 = onStateChange(tmp2[9])((data) => {
    const obj = { type: "__unsafe_event__", data };
    eventEmitter.emit(obj);
  });
  onEmitEvent = tmp24;
  ref3 = obj.useRef(undefined);
  const tmp25 = onStateChange(tmp2[9])((current) => {
    let obj2;
    if (ref3.current !== current) {
      ref3.current = current;
      const obj = { type: "options", data: obj2 };
      obj2 = { options: current };
      eventEmitter.emit(obj);
    }
  });
  onOptionsChange = tmp25;
  stackRef = obj.useRef(undefined);
  ref4 = obj.useRef(undefined);
  const tmp26 = onStateChange(tmp2[9])(() => {
    const tmp = !ref.current && ref4.current === getState();
    return tmp;
  });
  getIsStateEmitted = tmp26;
  const items2 = [addListener, addKeyedListener, tmp23, tmp24, tmp25, tmp26, scheduleUpdate, flushUpdates];
  const memo1 = obj.useMemo(() => ({ addListener, addKeyedListener, onDispatchAction, onEmitEvent, onOptionsChange, getIsStateEmitted, scheduleUpdate, flushUpdates, stackRef }), items2);
  ref5 = obj.useRef(true);
  callback2 = obj.useCallback(() => ref5.current, []);
  const items3 = [state, getState, setState, getKey, callback1, callback2, addOptionsGetter];
  const memo2 = obj.useMemo(() => ({ state, getState, setState, getKey, setKey: callback1, getIsInitial: callback2, addOptionsGetter }), items3);
  ref6 = obj.useRef(onReady);
  ref7 = obj.useRef(onStateChange);
  const effect = obj.useEffect(() => {
    ref5.current = false;
    ref7.current = onStateChange;
    ref6.current = onReady;
  });
  ref8 = obj.useRef(false);
  const items4 = [state, tmp18, eventEmitter];
  const effect1 = obj.useEffect(() => {
    const current = ref8.current;
    let tmp2 = !current;
    const tmp = ref8;
    if (!current) {
      tmp2 = isReady();
    }
    if (tmp2) {
      tmp.current = true;
      const current2 = ref6.current;
      if (current2 != null) {
        current2();
      }
      eventEmitter.emit({ type: "ready" });
    }
  }, items4);
  const items5 = [tmp16, eventEmitter, state];
  const effect2 = obj.useEffect(() => {
    ref4.current = state;
    const obj = { type: "state", data: { state } };
    const tmp = getRootState();
    eventEmitter.emit(obj);
    const current = ref.current;
    let current2 = !current;
    const tmp3 = ref;
    if (!current) {
      current2 = ref7.current;
    }
    if (current2) {
      ref7.current(tmp);
    }
    tmp3.current = false;
  }, items5);
  const tmp33 = onStateChange(tmp2[9])((arg0) => {

  });
  const Provider = tmp(tmp2[15]).NavigationIndependentTreeContext.Provider;
  const obj3 = { value: memo, children: scheduleUpdate(Provider3, obj4) };
  const Provider2 = tmp(tmp2[16]).NavigationContainerRefContext.Provider;
  obj4 = { value: memo1, children: scheduleUpdate(Provider4, obj5) };
  Provider3 = tmp(tmp2[17]).NavigationBuilderContext.Provider;
  obj5 = { value: memo2, children: scheduleUpdate(Provider5, obj6) };
  Provider4 = tmp(tmp2[3]).NavigationStateContext.Provider;
  obj6 = { value: lazyValue, children: scheduleUpdate(Provider6, obj8) };
  Provider5 = tmp(tmp2[18]).ConsumedParamsContext.Provider;
  Provider6 = tmp(tmp2[19]).UnhandledActionContext.Provider;
  if (onUnhandledAction == null) {
    onUnhandledAction = tmp33;
  }
  const obj7 = { value: false, children: scheduleUpdate(Provider2, obj3) };
  obj8 = { value: onUnhandledAction, children: scheduleUpdate(Provider7, obj9) };
  obj9 = { value: navigationInChildEnabled, children: scheduleUpdate(EnsureSingleNavigator, obj10) };
  Provider7 = tmp(tmp2[20]).DeprecatedNavigationInChildContext.Provider;
  obj10 = { children: scheduleUpdate(tmp(tmp2[22]).ThemeProvider, { value: theme, children }) };
  EnsureSingleNavigator = tmp(tmp2[21]).EnsureSingleNavigator;
  return scheduleUpdate(Provider, obj7);
});
