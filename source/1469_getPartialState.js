// Module ID: 1469
// Function ID: 17077
// Name: getPartialState
// Dependencies: [57, 29, 31, 33, 1470, 1471, 1472, 1473, 1474, 1461, 1475, 1476, 1477, 1479, 1480, 1478, 1481, 1482, 1483, 1484]

// Module 1469 (getPartialState)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["key", "routeNames"];
function getPartialState(routes) {
  let key;
  let routeNames;
  if (undefined !== routes) {
    ({ key, routeNames } = routes);
    let _Object = Object;
    let obj = { stale: true };
    routes = routes.routes;
    obj.routes = routes.map((state) => {
      let merged = state;
      if (undefined !== state.state) {
        const _Object = Object;
        const obj = { state: outer1_8(state.state) };
        merged = Object.assign({}, state, obj);
      }
      return merged;
    });
    return Object.assign({}, callback2(routes, closure_3), obj);
  }
}

export default importAllResult.forwardRef(function BaseNavigationContainer(children) {
  let independent;
  let onStateChange;
  let onUnhandledAction;
  let require;
  ({ initialState: require, onStateChange } = children);
  ({ onUnhandledAction, independent } = children);
  if (!importAllResult.useContext(onStateChange(first[4])).isDefault) {
    if (!independent) {
      const _Error = Error;
      const error = new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
      throw error;
    }
  }
  const tmp6 = callback(onStateChange(first[5])(() => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = closure_0;
    }
    return closure_8(tmp2);
  }), 5);
  first = tmp6[0];
  let closure_3 = tmp8;
  callback = tmp9;
  let _objectWithoutProperties = tmp10;
  const jsx = importAllResult.useRef(true);
  let closure_8 = importAllResult.useRef();
  callback = importAllResult.useCallback(() => ref2.current, []);
  const callback1 = importAllResult.useCallback((current) => {
    closure_8.current = current;
  }, []);
  const tmp14 = onStateChange(first[6])();
  const listeners = tmp14.listeners;
  const addListener = tmp14.addListener;
  const tmp15 = onStateChange(first[7])();
  const keyedListeners = tmp15.keyedListeners;
  const addKeyedListener = tmp15.addKeyedListener;
  const items = [listeners.focus];
  const callback2 = importAllResult.useCallback((arg0) => {
    let closure_0 = arg0;
    if (null == listeners.focus[0]) {
      const _console = console;
      console.error(outer1_0(first[8]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = listeners.focus;
      focus[0]((dispatch) => dispatch.dispatch(closure_0));
    }
  }, items);
  const items1 = [listeners.focus];
  const callback3 = importAllResult.useCallback(() => {
    if (null == listeners.focus[0]) {
      return false;
    } else {
      const focus = listeners.focus;
      const tmp2 = focus[0]((canGoBack) => canGoBack.canGoBack());
      let result = !tmp3;
      if (!!tmp2.handled) {
        result = tmp2.result;
      }
      return result;
    }
  }, items1);
  const items2 = [keyedListeners.getState, listeners.focus];
  const callback4 = importAllResult.useCallback((key) => {
    let closure_0 = key;
    key = undefined;
    if (null != key) {
      key = key.key;
    }
    if (null == key) {
      let key1;
      if (null != keyedListeners.getState.root) {
        const getState = keyedListeners.getState;
        key1 = getState.root().key;
      }
      key = key1;
    }
    if (null == key) {
      const _console = console;
      console.error(outer1_0(first[8]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = listeners.focus;
      focus[0]((dispatch) => {
        const CommonActions = outer2_0(first[9]).CommonActions;
        return dispatch.dispatch(Object.assign({}, CommonActions.reset(closure_0), { target: key }));
      });
    }
  }, items2);
  const items3 = [keyedListeners.getState];
  const callback5 = importAllResult.useCallback(() => {
    let rootResult;
    if (null != keyedListeners.getState.root) {
      const getState = keyedListeners.getState;
      rootResult = getState.root();
    }
    return rootResult;
  }, items3);
  const items4 = [callback5];
  const callback6 = importAllResult.useCallback(() => {
    const tmp = callback5();
    if (null != tmp) {
      return onStateChange(first[10])(tmp);
    }
  }, items4);
  const tmp21 = onStateChange(first[11])();
  let closure_20 = tmp21;
  const tmp22 = onStateChange(first[12])({});
  const addOptionsGetter = tmp22.addOptionsGetter;
  const getCurrentOptions = tmp22.getCurrentOptions;
  const items5 = [callback3, callback2, tmp21, getCurrentOptions, callback6, callback5, listeners.focus, callback4];
  const memo = importAllResult.useMemo(() => {
    const keys = Object.keys(outer1_0(first[9]).CommonActions);
    const reduced = keys.reduce((arg0, arg1) => {
      let closure_0 = arg1;
      arg0[arg1] = () => outer2_15(outer3_0(first[9]).CommonActions[closure_0](...arguments));
      return arg0;
    }, {});
    return Object.assign({}, reduced, tmp21.create("root"), {
      dispatch: callback2,
      resetRoot: callback4,
      isFocused() {
        return true;
      },
      canGoBack: callback3,
      getParent() {

      },
      getState() {
        return outer1_31.current;
      },
      getRootState: callback5,
      getCurrentRoute: callback6,
      getCurrentOptions,
      isReady() {
        return null != outer1_11.focus[0];
      }
    });
  }, items5);
  const items6 = [memo];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => memo, items6);
  const items7 = [tmp21];
  const callback7 = importAllResult.useCallback((action, noop) => {
    tmp21.emit({ type: "__unsafe_action__", data: { action, noop, stack: ref4.current } });
  }, items7);
  let closure_25 = importAllResult.useRef();
  const items8 = [tmp21];
  const callback8 = importAllResult.useCallback((current) => {
    if (ref3.current !== current) {
      ref3.current = current;
      let obj = { type: "options" };
      obj = { options: current };
      obj.data = obj;
      tmp21.emit(obj);
    }
  }, items8);
  let closure_27 = importAllResult.useRef();
  const items9 = [addListener, addKeyedListener, callback7, callback8];
  const items10 = [tmp6[3], tmp6[4]];
  const memo1 = importAllResult.useMemo(() => ({ addListener, addKeyedListener, onDispatchAction: callback7, onOptionsChange: callback8, stackRef: closure_27 }), items9);
  const memo2 = importAllResult.useMemo(() => ({ scheduleUpdate: _objectWithoutProperties, flushUpdates: closure_6 }), items10);
  let closure_28 = importAllResult.useRef(true);
  const callback9 = importAllResult.useCallback(() => ref5.current, []);
  const items11 = [first, tmp6[1], tmp6[2], callback, callback1, callback9, addOptionsGetter];
  const memo3 = importAllResult.useMemo(() => ({ state: first, getState: closure_3, setState: _slicedToArray, getKey: callback, setKey: callback1, getIsInitial: callback9, addOptionsGetter }), items11);
  let closure_30 = importAllResult.useRef(onStateChange);
  let closure_31 = importAllResult.useRef(first);
  const effect = importAllResult.useEffect(() => {
    closure_28.current = false;
    closure_30.current = onStateChange;
    closure_31.current = first;
  });
  const items12 = [callback5, tmp21, first];
  const effect1 = importAllResult.useEffect(() => {
    tmp21.emit({ type: "state", data: { state: first } });
    let current = !ref.current;
    if (current) {
      current = ref6.current;
    }
    if (current) {
      ref6.current(tmp);
    }
    ref.current = false;
  }, items12);
  let callback10 = importAllResult.useCallback((arg0) => {

  }, []);
  let obj = { value: memo };
  obj = { value: memo2 };
  obj = { value: memo1 };
  const obj1 = { value: memo3 };
  const obj2 = {};
  if (null != onUnhandledAction) {
    callback10 = onUnhandledAction;
  }
  obj2.value = callback10;
  obj2.children = jsx(onStateChange(first[17]), { children: children.children });
  obj1.children = jsx(onStateChange(first[16]).Provider, {});
  obj.children = jsx(onStateChange(first[4]).Provider, { value: memo3 });
  obj.children = jsx(onStateChange(first[15]).Provider, { value: memo1 });
  obj.children = jsx(require(first[14]).ScheduleUpdateContext.Provider, { value: memo1 });
  const tmp34Result = jsx(onStateChange(first[13]).Provider, { value: memo1 });
  let tmp36 = tmp34Result;
  if (independent) {
    const obj3 = { value: undefined };
    const obj4 = { value: undefined, children: tmp34Result };
    obj3.children = jsx(onStateChange(first[19]).Provider, { value: undefined, children: tmp34Result });
    tmp36 = jsx(onStateChange(first[18]).Provider, { value: undefined });
  }
  return tmp36;
});
