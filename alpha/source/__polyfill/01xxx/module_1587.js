// Module ID: 1587
// Function ID: 1588
// Dependencies: [19, 1532, 1543, 1566]
// Exports: useOnGetState

// Module 1587
import _mod1566 from "module_1566" /* 1566 */;
import react from "react" /* 19 */;


export const useOnGetState = function useOnGetState(getState) {
  getState = getState.getState;
  const getStateListeners = getState.getStateListeners;
  let addKeyedListener;
  let callback;
  let obj = addKeyedListener;
  addKeyedListener = addKeyedListener.useContext(getState(getStateListeners[1]).NavigationBuilderContext).addKeyedListener;
  const context = addKeyedListener.useContext(getState(getStateListeners[2]).NavigationRouteContext);
  let str = "root";
  if (context) {
    str = context.key;
  }
  const items = [getState, getStateListeners];
  callback = obj.useCallback(() => {
    const tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((state) => {
      let tmpResult;
      if (getStateListeners[state.key] != null) {
        tmpResult = tmp();
      }
      let tmp3 = state;
      if (state.state !== tmpResult) {
        const obj = { state: tmpResult };
        const merged = Object.assign(state);
        tmp3 = obj;
      }
      return tmp3;
    });
    let obj = _mod1566;
    let tmp3 = tmp;
    if (!obj.isArrayEqual(tmp.routes, mapped)) {
      const obj2 = { routes: mapped };
      let merged = Object.assign(tmp);
      tmp3 = obj2;
    }
    return tmp3;
  }, items);
  const items1 = [addKeyedListener, callback, str];
  const effect = obj.useEffect(() => {
    let tmpResult;
    if (addKeyedListener != null) {
      tmpResult = tmp("getState", str, callback);
    }
    return tmpResult;
  }, items1);
};
