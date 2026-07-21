// Module ID: 1521
// Function ID: 17444
// Name: _toPropertyKey
// Dependencies: []
// Exports: default

// Module 1521 (_toPropertyKey)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importAll(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;

export default function useDescriptors(state) {
  let addListener;
  let emitter;
  let navigation;
  let onAction;
  let router;
  state = state.state;
  const importDefault = state;
  ({ screens: closure_1, navigation } = state);
  let closure_2 = navigation;
  ({ screenOptions: closure_3, defaultScreenOptions: closure_4, onAction } = state);
  const React = onAction;
  const getState = state.getState;
  const jsx = getState;
  ({ setState: closure_7, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  ({ router, emitter } = state);
  const tmp = callback(React.useState({}), 2);
  let closure_11 = tmp[0];
  const tmp2 = tmp[1];
  const context = React.useContext(importDefault(dependencyMap[5]));
  const onDispatchAction = context.onDispatchAction;
  const onOptionsChange = context.onOptionsChange;
  const stackRef = context.stackRef;
  const items = [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef];
  let closure_16 = React.useMemo(() => ({ navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef }), items);
  let closure_17 = importDefault(dependencyMap[6])({ state, getState, navigation, setOptions: tmp2, router, emitter });
  return importDefault(dependencyMap[7])(state.routes).reduce((arg0, route) => {
    const state = route;
    const props = tmp.props;
    const navigation = props;
    const tmp2 = closure_17[route.key];
    const items = [tmp2];
    if (arg2[route.name].options) {
      const options = tmp.options;
      const _Boolean = Boolean;
      let found = options.filter(Boolean);
    } else {
      found = [];
    }
    const items1 = [props.options, closure_11[route.key]];
    const combined = items.concat(tmp2(found), items1);
    const reduced = combined.reduce((arg0, arg1) => {
      let tmp = arg1;
      if ("function" === typeof arg1) {
        const obj = { route: arg1, navigation: arg1 };
        tmp = arg1(obj);
      }
      return Object.assign(arg0, tmp);
    }, {});
    if ("function" === typeof merged) {
      const obj = { route, navigation: tmp2, options: reduced };
      let tmp6 = merged(obj);
    } else {
      tmp6 = merged;
    }
    const merged = Object.assign({}, tmp6, reduced);
    function clearOptions() {
      return callback2((arg0) => {
        if (closure_0.key in arg0) {
          const items = [closure_0.key];
          return callback(arg0, items.map(closure_7));
        } else {
          return arg0;
        }
      });
    }
    arg0[route.key] = {
      route,
      navigation: tmp2,
      render() {
        let obj = { value: closure_16 };
        obj = { value: tmp2 };
        obj = { value: arg1, children: callback(arg1(arg2[10]), { navigation: tmp2, route: arg1, screen: props, routeState: arg1.routes[closure_1].state, getState: callback, setState: closure_7, options: merged, clearOptions }) };
        obj.children = callback(arg1(arg2[9]).Provider, obj);
        obj.children = callback(arg1(arg2[8]).Provider, obj);
        return callback(arg1(arg2[5]).Provider, obj, arg1.key);
      },
      options: merged
    };
    return arg0;
  }, {});
};
