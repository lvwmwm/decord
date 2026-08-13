// Module ID: 5576
// Function ID: 5577
// Name: useExclusiveGestures
// Dependencies: [5575, 5526]

// Module 5576 (useExclusiveGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [require(5526) /* ComposedGestureName */.ComposedGestureName.Exclusive, ...items];
  const applyResult = require(5575) /* useComposedGesture */.useComposedGesture.apply(items1);
  applyResult.type = require(5526) /* ComposedGestureName */.ComposedGestureName.Exclusive;
  return applyResult;
};
