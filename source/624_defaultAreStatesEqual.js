// Module ID: 624
// Function ID: 7132
// Name: defaultAreStatesEqual
// Dependencies: []
// Exports: statesWillNeverBeEqual, useStateFromStoresArray, useStateFromStoresObject

// Module 624 (defaultAreStatesEqual)
function defaultAreStatesEqual(arg0, arg1) {
  return arg0 === arg1;
}
function useStateFromStores(items, fn, items1, isVersionEqual) {
  let tmp = isVersionEqual;
  fn = items;
  const importDefault = fn;
  const dependencyMap = items1;
  if (isVersionEqual === undefined) {
    tmp = defaultAreStatesEqual;
  }
  const callback = tmp;
  let current;
  let tmp6;
  let callback2;
  const tmp2 = tmp6(null);
  if (null == tmp2.current) {
    const obj = { stores: items, areStatesEqual: tmp, getStateFromStores: fn, prevDeps: undefined, state: undefined };
    tmp2.current = obj;
  }
  current = tmp2.current;
  const state = current.state;
  tmp6 = state;
  if (null == items1) {
    tmp6 = fn();
    let tmp5 = state;
    if (!tmp7) {
      tmp5 = tmp6;
    }
    const tmp7 = null != state && tmp(state, tmp6);
  } else {
    tmp5 = state;
    const obj2 = fn(dependencyMap[2]);
  }
  callback2(() => {
    current.getStateFromStores = arg1;
    current.prevDeps = arg2;
    current.state = tmp6;
  });
  callback2 = callback(current(null), 2)[1];
  callback2(() => {
    const batchedStoreListener = new arg0(arg2[3]).BatchedStoreListener(arg0, () => {
      const stateFromStores = stateFromStores.getStateFromStores();
      if (!callback(stateFromStores.state, stateFromStores)) {
        stateFromStores.state = stateFromStores;
        callback2({});
      }
    });
    const arg0 = batchedStoreListener;
    batchedStoreListener.attach("useStateFromStores");
    return () => batchedStoreListener.detach();
  }, []);
  return tmp5;
}
let closure_3 = importDefault(dependencyMap[0]);
({ useState: closure_4, useRef: closure_5, useInsertionEffect: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStores.tsx");

export function statesWillNeverBeEqual() {
  return false;
}
export { useStateFromStores };
export const useStateFromStoresObject = function useStateFromStoresObject(items, fn, items1) {
  return useStateFromStores(items, fn, items1, importDefault(dependencyMap[2]));
};
export const useStateFromStoresArray = function useStateFromStoresArray(items, fn, items1) {
  return useStateFromStores(items, fn, items1, fn(dependencyMap[2]).areArraysShallowEqual);
};
