// Module ID: 623
// Function ID: 7124
// Name: keys1
// Dependencies: [31, 622]
// Exports: create

// Module 623 (keys1)
import result from "result";

function useStore(subscribe) {
  let closure_0 = subscribe;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    const dependencyMap = tmp;
    const items = [subscribe, tmp];
    const items1 = [subscribe, tmp];
    const callback = React.useCallback(() => tmp(subscribe.getState()), items);
    const syncExternalStore = React.useSyncExternalStore(subscribe.subscribe, callback, React.useCallback(() => tmp(subscribe.getInitialState()), items1));
    const debugValue = React.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  tmp = identity;
}
function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(622).createStore(arg0);
  function useBoundStore(arg0) {
    return outer1_5(store, arg0);
  }
  const merged = Object.assign(useBoundStore, store);
  return useBoundStore;
}

export const create = function create(arg0) {
  if (arg0) {
    let tmpResult = tmp(arg0);
  } else {
    tmpResult = tmp;
  }
  return tmpResult;
};
export { useStore };
