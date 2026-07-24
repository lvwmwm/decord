// Module ID: 1520
// Function ID: 17441
// Name: useOnGetState
// Dependencies: [31, 1478, 1483, 1512]
// Exports: default

// Module 1520 (useOnGetState)
import result from "result";


export default function useOnGetState(getState) {
  getState = getState.getState;
  const getStateListeners = getState.getStateListeners;
  addKeyedListener = addKeyedListener.useContext(getState(getStateListeners[1])).addKeyedListener;
  const context = addKeyedListener.useContext(getState(getStateListeners[2]));
  let str = "root";
  if (context) {
    str = context.key;
  }
  const items = [getState, getStateListeners];
  const callback = addKeyedListener.useCallback(() => {
    const tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((state) => {
      let obj = outer1_1[state.key];
      let callResult;
      if (null != obj) {
        callResult = obj.call(outer1_1);
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
      let _Object = Object;
      let obj = { routes: mapped };
      merged = Object.assign({}, tmp, obj);
    }
    return merged;
  }, items);
  const items1 = [addKeyedListener, callback, str];
  const effect = addKeyedListener.useEffect(() => {
    let tmp;
    if (null != addKeyedListener) {
      tmp = addKeyedListener("getState", str, callback);
    }
    return tmp;
  }, items1);
};
