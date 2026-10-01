// Module ID: 563
// Function ID: 564
// Name: useStateFromStores
// Dependencies: [32, 19, 558, 564, 2]
// Exports: statesWillNeverBeEqual, useStateFromStoresArray, useStateFromStoresObject

// Module 563 (useStateFromStores)
import shallowEqual from "shallowEqual" /* 558 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const shallowEqualDefault = shallowEqual;
let _require, dependencyMap, stateFromStores;

let closure_4;
let hasOwnProperty;
let metroRequire;
function defaultAreStatesEqual(arg0, arg1) {
  return arg0 === arg1;
}
function useStateFromStores(items, getCurrentRestrictedHoursState, items1, isVersionEqual) {
  let closure_3;
  let prevDeps;
  let tmp5;
  _require = items;
  const getStateFromStores = getCurrentRestrictedHoursState;
  dependencyMap = items1;
  let tmp = isVersionEqual;
  if (isVersionEqual === undefined) {
    tmp = defaultAreStatesEqual;
  }
  _slicedToArray = tmp;
  let current;
  let state;
  let closure_6;
  const tmp2 = state(null);
  if (null == tmp2.current) {
    const obj = { stores: items, areStatesEqual: tmp, getStateFromStores: getCurrentRestrictedHoursState, prevDeps: "Boolean", state: "paddingHorizontal" };
    tmp2.current = obj;
  }
  current = tmp2.current;
  state = current.state;
  if (null == items1) {
    const tmp6 = getCurrentRestrictedHoursState();
    tmp5 = state;
    const tmp7 = null != state && tmp(state, tmp6);
    if (!tmp7) {
      state = tmp6;
      tmp5 = tmp6;
    }
  } else {
    tmp5 = state;
    require("shallowEqual");
  }
  closure_6(() => {
    current.getStateFromStores = getStateFromStores;
    current.prevDeps = prevDeps;
    current.state = state;
  });
  closure_6 = _slicedToArray(current(null), 2)[1];
  closure_6(() => {
    let batchedStoreListener;
    batchedStoreListener = new items(prevDeps[3]).BatchedStoreListener(batchedStoreListener, () => {
      const tmp = stateFromStores;
      stateFromStores = stateFromStores.getStateFromStores();
      if (!closure_1_3(stateFromStores.state, stateFromStores)) {
        tmp.state = stateFromStores;
        closure_1_6({});
      }
    });
    batchedStoreListener.attach("useStateFromStores");
    return () => batchedStoreListener.detach();
  }, []);
  return tmp5;
}
let _slicedToArray = _slicedToArray_mod;
({ useState: closure_4, useRef: hasOwnProperty, useInsertionEffect: metroRequire } = react);
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStores.tsx");

export function statesWillNeverBeEqual() {
  return false;
}
export { useStateFromStores };
export const useStateFromStoresObject = function useStateFromStoresObject(items, getCurrentRestrictedHoursState, items1) {
  return useStateFromStores(items, getCurrentRestrictedHoursState, items1, shallowEqualDefault);
};
export const useStateFromStoresArray = function useStateFromStoresArray(items, getCurrentRestrictedHoursState, items1) {
  return useStateFromStores(items, getCurrentRestrictedHoursState, items1, shallowEqual.areArraysShallowEqual);
};
