// Module ID: 624
// Function ID: 7132
// Name: defaultAreStatesEqual
// Dependencies: [57, 31, 620, 625, 2]
// Exports: statesWillNeverBeEqual, useStateFromStoresArray, useStateFromStoresObject

// Module 624 (defaultAreStatesEqual)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function defaultAreStatesEqual(arg0, arg1) {
  return arg0 === arg1;
}
function useStateFromStores(items, fn, items1, statesWillNeverBeEqual) {
  let tmp = statesWillNeverBeEqual;
  const _require = items;
  let closure_1 = fn;
  const dependencyMap = items1;
  if (statesWillNeverBeEqual === undefined) {
    tmp = defaultAreStatesEqual;
  }
  const callback = tmp;
  let current;
  let state;
  let callback2;
  const tmp2 = state(null);
  if (null == tmp2.current) {
    const obj = { stores: items, areStatesEqual: tmp, getStateFromStores: fn, prevDeps: undefined, state: undefined };
    tmp2.current = obj;
  }
  current = tmp2.current;
  state = current.state;
  if (null == items1) {
    const tmp6 = fn();
    let tmp5 = state;
    if (!tmp7) {
      state = tmp6;
      tmp5 = tmp6;
    }
    tmp7 = null != state && tmp(state, tmp6);
  } else {
    tmp5 = state;
    const obj2 = _require(620);
  }
  callback2(() => {
    current.getStateFromStores = closure_1;
    current.prevDeps = closure_2;
    current.state = state;
  });
  callback2 = callback(current(null), 2)[1];
  callback2(() => {
    batchedStoreListener = new items(items1[3]).BatchedStoreListener(batchedStoreListener, () => {
      const stateFromStores = outer1_4.getStateFromStores();
      if (!outer1_3(outer1_4.state, stateFromStores)) {
        outer1_4.state = stateFromStores;
        outer1_6({});
      }
    });
    batchedStoreListener.attach("useStateFromStores");
    return () => batchedStoreListener.detach();
  }, []);
  return tmp5;
}
({ useState: closure_4, useRef: closure_5, useInsertionEffect: closure_6 } = result);
result = require("shallowEqual").fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStores.tsx");

export function statesWillNeverBeEqual() {
  return false;
}
export { useStateFromStores };
export const useStateFromStoresObject = function useStateFromStoresObject(items, fn, items1) {
  return useStateFromStores(items, fn, items1, importDefault(620));
};
export const useStateFromStoresArray = function useStateFromStoresArray(items, fn, items1) {
  return useStateFromStores(items, fn, items1, require(620) /* shallowEqual */.areArraysShallowEqual);
};
