// Module ID: 1570
// Function ID: 1571
// Dependencies: [19, 1515, 1526, 1549]
// Exports: useOnGetState

// Module 1570
import _mod1549 from "module_1549" /* 1549 */;
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
    let obj = _mod1549;
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
