// Module ID: 3847
// Function ID: 32043
// Name: keys1
// Dependencies: [31, 3846]
// Exports: create

// Module 3847 (keys1)
import result from "result";

function useStore(subscribe) {
  let closure_0 = subscribe;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    const dependencyMap = tmp;
    const syncExternalStore = closure_2.useSyncExternalStore(subscribe.subscribe, () => tmp(subscribe.getState()), () => tmp(subscribe.getInitialState()));
    const debugValue = closure_2.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  tmp = identity;
}
function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(3846).createStore(arg0);
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
