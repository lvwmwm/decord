// Module ID: 3845
// Function ID: 32030
// Name: useStore
// Dependencies: []
// Exports: create

// Module 3845 (useStore)
function useStore(subscribe) {
  const require = subscribe;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    const dependencyMap = tmp;
    const syncExternalStore = closure_2.useSyncExternalStore(subscribe.subscribe, () => tmp(arg0.getState()), () => tmp(arg0.getInitialState()));
    const debugValue = closure_2.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  tmp = identity;
}
let closure_2 = require(dependencyMap[0]);
function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  const store = require(dependencyMap[1]).createStore(arg0);
  const require = store;
  function useBoundStore(arg0) {
    return callback(store, arg0);
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
