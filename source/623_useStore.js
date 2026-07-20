// Module ID: 623
// Function ID: 7124
// Name: useStore
// Dependencies: []
// Exports: create

// Module 623 (useStore)
function useStore(subscribe) {
  const require = subscribe;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    const dependencyMap = tmp;
    const items = [subscribe, tmp];
    const items1 = [subscribe, tmp];
    const callback = React.useCallback(() => tmp(arg0.getState()), items);
    const syncExternalStore = React.useSyncExternalStore(subscribe.subscribe, callback, React.useCallback(() => tmp(arg0.getInitialState()), items1));
    const debugValue = React.useDebugValue(syncExternalStore);
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
