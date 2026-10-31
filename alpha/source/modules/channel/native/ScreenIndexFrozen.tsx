// Module ID: 5208
// Function ID: 5209
// Name: ScreenIndexFrozen
// Dependencies: [19, 5095, 2]
// Exports: addFrozenScreenIndexesChangedListener, freezeScreenIndex, isScreenIndexFrozen, removeFrozenScreenIndexesChangedListener, useIsScreenIndexFrozenSharedValue

// Module 5208 (ScreenIndexFrozen)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const set = new Set();
const set1 = new Set();
let result = size.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export function freezeScreenIndex(shouldFreeze, arg1) {
  const tmp = shouldFreeze;
  if (tmp) {
    set.add(arg1);
  } else {
    set.delete(arg1);
  }
  const item = set1.forEach((fn) => fn());
}
export function isScreenIndexFrozen(item) {
  return set.has(item);
}
export function addFrozenScreenIndexesChangedListener(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set.delete(fn);
  };
}
export function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
}
export function useIsScreenIndexFrozenSharedValue(arg0) {
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
}
