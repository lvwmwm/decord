// Module ID: 1522
// Function ID: 17455
// Name: useNavigationCache
// Dependencies: [77, 29, 31, 1478, 1461]
// Exports: default

// Module 1522 (useNavigationCache)
import _defineProperty from "_defineProperty";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";

const require = arg1;
let closure_3 = ["emit"];

export default function useNavigationCache(getState) {
  let emitter;
  let router;
  getState = getState.getState;
  let navigation = getState.navigation;
  let setOptions = getState.setOptions;
  ({ router, emitter } = getState);
  const stackRef = React.useContext(navigation(setOptions[3])).stackRef;
  const items = [getState, navigation, setOptions, router, emitter];
  const memo = React.useMemo(() => ({ current: {} }), items);
  let _objectWithoutProperties = Object.assign({}, router.actionCreators, getState(setOptions[4]).CommonActions);
  const routes = getState.state.routes;
  memo.current = routes.reduce((arg0, key) => {
    let closure_0 = arg0;
    const navigation = key;
    if (withStack.current[key.key]) {
      arg0[key.key] = tmp;
    } else {
      const emit = navigation.emit;
      const tmp5 = callback(navigation, emitter);
      const setOptions = tmp5;
      function dispatch(arg0) {
        let tmp = arg0;
        if ("function" === typeof arg0) {
          tmp = arg0(dependencyMap());
        }
        if (null != tmp) {
          const _Object = Object;
          const obj = { source: key.key };
          key.dispatch(Object.assign(obj, tmp));
        }
      }
      withStack = function withStack(arg0) {
        arg0();
      };
      let _Object = Object;
      const keys = Object.keys(callback);
      const _Object2 = Object;
      const reduced = keys.reduce((arg0, arg1) => {
        let closure_0 = arg1;
        arg0[arg1] = () => {
          const length = arguments.length;
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          return outer1_4(() => outer2_3(outer3_5[array].apply(outer3_5, array)));
        };
        return arg0;
      }, {});
      let obj = {
        dispatch(arg0) {
            let closure_0 = arg0;
            return withStack(() => outer1_3(closure_0));
          },
        getParent(arg0) {
            if (undefined !== arg0) {
              if (arg0 === tmp5.getId()) {
                let parent = dependencyMap[key.key];
              }
              return parent;
            }
            parent = tmp5.getParent(arg0);
          },
        setOptions(arg0) {
            let closure_0 = arg0;
            return tmp5((arg0) => Object.assign({}, arg0, memo({}, outer1_1.key, Object.assign({}, arg0[outer1_1.key], closure_0))));
          },
        isFocused() {
            const tmp = dependencyMap();
            let tmp2 = tmp.routes[tmp.index].key === key.key;
            if (tmp2) {
              let isFocusedResult = !key;
              if (!isFocusedResult) {
                isFocusedResult = key.isFocused();
              }
              tmp2 = isFocusedResult;
            }
            return tmp2;
          }
      };
      const _Object3 = Object;
      arg0[key.key] = Object.assign({}, tmp5, reduced, dispatch.create(key.key), obj);
    }
    return arg0;
  }, {});
  return memo.current;
};
