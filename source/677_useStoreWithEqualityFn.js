// Module ID: 677
// Function ID: 8382
// Name: useStoreWithEqualityFn
// Dependencies: [31, 678, 622]
// Exports: createWithEqualityFn

// Module 677 (useStoreWithEqualityFn)
import result from "result";

function useStoreWithEqualityFn(createJSONStorage, arg1, shallow) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    let tmp2;
    if (arguments.length > 2) {
      tmp2 = arguments[2];
    }
    const obj = require(678) /* is */;
    const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(createJSONStorage.subscribe, createJSONStorage.getState, createJSONStorage.getInitialState, tmp, tmp2);
    const debugValue = closure_2.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  tmp = identity;
}
function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  const _require = arg1;
  store = _require(store[2]).createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let tmp3 = arguments[1];
      }
      return tmp(tmp2, arg0, tmp3);
    }
    tmp3 = closure_0;
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
