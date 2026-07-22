// Module ID: 1522
// Function ID: 17453
// Name: useNavigationCache
// Dependencies: []
// Exports: default

// Module 1522 (useNavigationCache)
let closure_3 = [false];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);

export default function useNavigationCache(getState) {
  let emitter;
  let router;
  getState = getState.getState;
  const arg1 = getState;
  const navigation = getState.navigation;
  const importDefault = navigation;
  const setOptions = getState.setOptions;
  const dependencyMap = setOptions;
  ({ router, emitter } = getState);
  let closure_3 = emitter;
  const stackRef = React.useContext(importDefault(dependencyMap[3])).stackRef;
  const items = [getState, navigation, setOptions, router, emitter];
  const memo = React.useMemo(() => ({ current: {} }), items);
  let closure_4 = memo;
  let closure_5 = Object.assign({}, router.actionCreators, arg1(dependencyMap[4]).CommonActions);
  const routes = getState.state.routes;
  memo.current = routes.reduce((arg0, key) => {
    const getState = arg0;
    const navigation = key;
    if (withStack.current[key.key]) {
      arg0[key.key] = tmp;
    } else {
      const emit = navigation.emit;
      const tmp5 = callback(navigation, dispatch);
      const setOptions = tmp5;
      function dispatch(arg0) {
        let dispatch;
        let tmp = arg0;
        if ("function" === typeof arg0) {
          tmp = arg0(arg0());
        }
        if (null != tmp) {
          const _Object = Object;
          const obj = {};
          ({ key: obj.source, dispatch } = arg1);
          dispatch(Object.assign(obj, tmp));
        }
      }
      function withStack(arg0) {
        arg0();
      }
      const _Object = Object;
      const keys = Object.keys(callback);
      const _Object2 = Object;
      const reduced = keys.reduce((arg0, arg1) => {
        arg0 = arg1;
        arg0[arg1] = () => {
          const length = arguments.length;
          const array = new Array(length);
          const arg1 = array;
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          return callback(() => callback(closure_5[closure_0].apply(closure_5, array)));
        };
        return arg0;
      }, {});
      const obj = {
        dispatch(arg0) {
            return withStack(() => callback(arg0));
          },
        getParent(arg0) {
            if (undefined !== arg0) {
              if (arg0 === tmp5.getId()) {
                let parent = arg0[closure_1.key];
              }
              return parent;
            }
            parent = tmp5.getParent(arg0);
          },
        setOptions(arg0) {
            return tmp5((arg0) => Object.assign({}, arg0, callback({}, key.key, Object.assign({}, arg0[closure_1.key], arg0))));
          },
        isFocused(arg0, self) {
            const tmp = arg0();
            let tmp2 = tmp.routes[tmp.index].key === self.key;
            if (tmp2) {
              let isFocusedResult = !self;
              if (!isFocusedResult) {
                isFocusedResult = self.isFocused();
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
