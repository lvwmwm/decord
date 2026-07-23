// Module ID: 1521
// Function ID: 17445
// Name: _toPropertyKey
// Dependencies: [29, 65, 57, 31, 33, 1478, 1522, 1491, 1484, 1483, 1523]
// Exports: default

// Module 1521 (_toPropertyKey)
import _objectWithoutProperties from "_objectWithoutProperties";
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if ("object" === typeof arg0) {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const callResult = obj.call(arg0, "string");
        StringResult = callResult;
        if ("object" === typeof callResult) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if ("symbol" !== typeof StringResult) {
    text = `${tmp}`;
  }
  return text;
}

export default function useDescriptors(state) {
  let _toPropertyKey;
  let addListener;
  let _toConsumableArray;
  let _slicedToArray;
  let dependencyMap;
  let emitter;
  let navigation;
  let onAction;
  let router;
  state = state.state;
  ({ screens: dependencyMap, navigation } = state);
  ({ screenOptions: _toConsumableArray, defaultScreenOptions: _slicedToArray, onAction } = state);
  const getState = state.getState;
  ({ setState: _toPropertyKey, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  ({ router, emitter } = state);
  let tmp = callback(onAction.useState({}), 2);
  let closure_11 = tmp[0];
  let closure_12 = tmp2;
  const context = onAction.useContext(state(1478));
  const onDispatchAction = context.onDispatchAction;
  const onOptionsChange = context.onOptionsChange;
  const stackRef = context.stackRef;
  let items = [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef];
  let closure_16 = onAction.useMemo(() => ({ navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef }), items);
  let closure_17 = state(1522)({ state, getState, navigation, setOptions: tmp2, router, emitter });
  return state(1491)(state.routes).reduce((arg0, route) => {
    let closure_0 = route;
    const table = arg2;
    const props = tmp.props;
    let _toConsumableArray = tmp2;
    let items = [_toConsumableArray];
    if (table[route.name].options) {
      const options = tmp.options;
      const _Boolean = Boolean;
      let found = options.filter(Boolean);
    } else {
      found = [];
    }
    const items1 = [props.options, table2[route.key]];
    const combined = items.concat(outer1_3(found), items1);
    const reduced = combined.reduce((arg0, arg1) => {
      let tmp = arg1;
      if ("function" === typeof arg1) {
        const obj = { route: closure_0, navigation: _toConsumableArray };
        tmp = arg1(obj);
      }
      return Object.assign(arg0, tmp);
    }, {});
    if ("function" === typeof merged) {
      let obj = { route, navigation: tmp2, options: reduced };
      let tmp6 = merged(obj);
    } else {
      tmp6 = merged;
    }
    merged = Object.assign({}, tmp6, reduced);
    function clearOptions() {
      return outer1_12((arg0) => {
        if (outer1_0.key in arg0) {
          const items = [outer1_0.key];
          return navigation(arg0, items.map(outer3_7));
        } else {
          return arg0;
        }
      });
    }
    arg0[route.key] = {
      route,
      navigation: table3[route.key],
      render() {
        let obj = { value: outer1_16 };
        obj = { value: _toConsumableArray };
        obj = { value: closure_0, children: getState(state(outer2_1[10]), { navigation: _toConsumableArray, route: closure_0, screen: props, routeState: closure_0.routes[closure_1].state, getState: outer1_6, setState: outer1_7, options: merged, clearOptions }) };
        obj.children = getState(state(outer2_1[9]).Provider, obj);
        obj.children = getState(state(outer2_1[8]).Provider, obj);
        return getState(state(outer2_1[5]).Provider, obj, closure_0.key);
      },
      options: merged
    };
    return arg0;
  }, {});
};
