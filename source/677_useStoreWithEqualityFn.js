// Module ID: 677
// Function ID: 8382
// Name: useStoreWithEqualityFn
// Dependencies: [0, 0, 2]
// Exports: createWithEqualityFn

// Module 677 (useStoreWithEqualityFn)
import result from "result";

function useStoreWithEqualityFn(closure_4, arg1, shallow) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    let tmp2;
    if (arguments.length > 2) {
      tmp2 = arguments[2];
    }
    const obj = require(dependencyMap[1]);
    const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(closure_4.subscribe, closure_4.getState, closure_4.getInitialState, tmp, tmp2);
    const debugValue = result.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  tmp = identity;
}
function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  const require = arg1;
  const store = require(dependencyMap[2]).createStore(arg0);
  const dependencyMap = store;
  function useBoundStoreWithEqualityFn(arg0) {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let tmp3 = arguments[1];
      }
      return tmp(tmp2, arg0, tmp3);
    }
    tmp3 = arg1;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = function createWithEqualityFn(initState, shallow) {
  if (initState) {
    let tmpResult = tmp(initState, shallow);
  } else {
    tmpResult = tmp;
  }
  return tmpResult;
};
export { useStoreWithEqualityFn };
