// Module ID: 1243
// Function ID: 1244
// Dependencies: [19, 1244, 561]
// Exports: createWithEqualityFn, useStoreWithEqualityFn

// Module 1243
import react2 from "react" /* 1244 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  let closure_0;
  let store;
  _require = arg1;
  const obj = require("module_561");
  store = obj.createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = closure_0;
    }
    let tmp2 = arg0;
    if (arg0 === undefined) {
      tmp2 = identity;
    }
    const obj = react2;
    const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
    const debugValue = react.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = (arg0, arg1) => {
  let closure_0;
  let store;
  let tmp2;
  let tmp = createWithEqualityFnImpl;
  if (arg0) {
    if (typeof tmp === "function") {
      _require = arg1;
      let obj = require("module_561");
      store = obj.createStore(arg0);
      function useBoundStoreWithEqualityFn(arg0) {
        let tmp = arg1;
        if (arg1 === undefined) {
          tmp = closure_0;
        }
        let tmp2 = arg0;
        if (arg0 === undefined) {
          tmp2 = identity;
        }
        const obj = react2;
        const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
        const debugValue = react.useDebugValue(syncExternalStoreWithSelector);
        return syncExternalStoreWithSelector;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStoreWithEqualityFn, store);
      tmp2 = useBoundStoreWithEqualityFn;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = tmp;
  }
  return tmp2;
};
export const useStoreWithEqualityFn = function useStoreWithEqualityFn(context, arg1, shallow) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  const obj = react2;
  const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(context.subscribe, context.getState, context.getInitialState, tmp, shallow);
  const debugValue = react.useDebugValue(syncExternalStoreWithSelector);
  return syncExternalStoreWithSelector;
};
