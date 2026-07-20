// Module ID: 3988
// Function ID: 33098
// Name: isScreenIndexFrozen
// Dependencies: []
// Exports: freezeScreenIndex, useIsScreenIndexFrozenSharedValue

// Module 3988 (isScreenIndexFrozen)
function isScreenIndexFrozen(arg0) {
  return set.has(arg0);
}
function addFrozenScreenIndexesChangedListener(arg0) {
  const arg1 = arg0;
  set1.add(arg0);
  return () => {
    callback(arg0);
  };
}
function removeFrozenScreenIndexesChangedListener(arg0) {
  set1.delete(arg0);
}
let closure_2 = importAll(dependencyMap[0]);
const set = new Set();
const set1 = new Set();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/channel/native/ScreenIndexFrozen.tsx");

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
  const arg1 = arg0;
  const sharedValue = arg1(dependencyMap[1]).useSharedValue(isScreenIndexFrozen(arg0));
  const dependencyMap = sharedValue;
  const items = [arg0, sharedValue];
  const effect = React.useEffect(() => callback(() => {
    const result = closure_1.set(callback(closure_0));
  }), items);
  return sharedValue;
};
