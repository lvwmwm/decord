// Module ID: 1520
// Function ID: 17439
// Name: useOnGetState
// Dependencies: []
// Exports: default

// Module 1520 (useOnGetState)
let closure_2 = importAll(dependencyMap[0]);

export default function useOnGetState(getState) {
  getState = getState.getState;
  const importDefault = getState;
  const getStateListeners = getState.getStateListeners;
  const dependencyMap = getStateListeners;
  const addKeyedListener = React.useContext(importDefault(dependencyMap[1])).addKeyedListener;
  const React = addKeyedListener;
  const context = React.useContext(importDefault(dependencyMap[2]));
  let str = "root";
  if (context) {
    str = context.key;
  }
  const items = [getState, getStateListeners];
  const callback = React.useCallback(() => {
    const tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((state) => {
      let obj = closure_1[state.key];
      let callResult;
      if (null != obj) {
        callResult = obj.call(closure_1);
      }
      let merged = state;
      if (state.state !== callResult) {
        const _Object = Object;
        obj = { state: callResult };
        merged = Object.assign({}, state, obj);
      }
      return merged;
    });
    let merged = tmp;
    if (!getState(getStateListeners[3])(tmp.routes, mapped)) {
      const _Object = Object;
      const obj = { routes: mapped };
      merged = Object.assign({}, tmp, obj);
    }
    return merged;
  }, items);
  const items1 = [addKeyedListener, callback, str];
  const effect = React.useEffect(() => {
    let tmp;
    if (null != addKeyedListener) {
      tmp = addKeyedListener("getState", str, callback);
    }
    return tmp;
  }, items1);
};
