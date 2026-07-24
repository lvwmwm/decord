// Module ID: 3990
// Function ID: 33111
// Name: isScreenIndexFrozen
// Dependencies: [31, 3991, 2]
// Exports: freezeScreenIndex, useIsScreenIndexFrozenSharedValue

// Module 3990 (isScreenIndexFrozen)
import result from "result";
import set from "set";

const require = arg1;
function isScreenIndexFrozen(arg0) {
  return set.has(arg0);
}
function addFrozenScreenIndexesChangedListener(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    outer1_7(closure_0);
  };
}
function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
}
let set = new Set();
const set1 = new Set();
let result = set.fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

export const freezeScreenIndex = function freezeScreenIndex(shouldFreeze, arg1) {
  if (shouldFreeze) {
    obj.add(arg1);
  } else {
    obj.delete(arg1);
  }
  const item = set1.forEach((arg0) => arg0());
};
export { isScreenIndexFrozen };
export { addFrozenScreenIndexesChangedListener };
export { removeFrozenScreenIndexesChangedListener };
export const useIsScreenIndexFrozenSharedValue = function useIsScreenIndexFrozenSharedValue(arg0) {
  const _require = arg0;
  sharedValue = _require(sharedValue[1]).useSharedValue(isScreenIndexFrozen(arg0));
  const items = [arg0, sharedValue];
  const effect = React.useEffect(() => outer1_6(() => {
    const result = outer1_1.set(outer2_5(outer1_0));
  }), items);
  return sharedValue;
};
