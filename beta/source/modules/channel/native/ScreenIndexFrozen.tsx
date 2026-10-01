// Module ID: 4702
// Function ID: 4703
// Name: ScreenIndexFrozen
// Dependencies: [19, 4566, 2]
// Exports: addFrozenScreenIndexesChangedListener, freezeScreenIndex, isScreenIndexFrozen, removeFrozenScreenIndexesChangedListener, useIsScreenIndexFrozenSharedValue

// Module 4702 (ScreenIndexFrozen)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const set = new Set();
const set1 = new Set();
let result = size.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  const tmp = shouldFreeze;
  if (tmp) {
    set.add(arg1);
  } else {
    set.delete(arg1);
  }
  const item = set1.forEach((fn) => fn());
};
export const isScreenIndexFrozen = function isScreenIndexFrozen(item) {
  return set.has(item);
};
export const addFrozenScreenIndexesChangedListener = function addFrozenScreenIndexesChangedListener(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set.delete(fn);
  };
};
export const removeFrozenScreenIndexesChangedListener = function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
};
export const useIsScreenIndexFrozenSharedValue = function useIsScreenIndexFrozenSharedValue(arg0) {
  let closure_0;
  let sharedValue;
  _require = arg0;
  const obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(set.has(arg0));
  const items = [arg0, sharedValue];
  const effect = react.useEffect(() => {
    const fn = () => {
      const result = sharedValue.set(set.has(closure_1_0));
    };
    set1.add(fn);
    return () => {
      set.delete(fn);
    };
  }, items);
  return sharedValue;
};
