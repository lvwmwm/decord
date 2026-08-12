// Module ID: 5575
// Function ID: 5576
// Name: useExclusiveGestures
// Dependencies: [5574, 5525]

// Module 5575 (useExclusiveGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [require(5525) /* ComposedGestureName */.ComposedGestureName.Exclusive, ...items];
  const applyResult = require(5574) /* useComposedGesture */.useComposedGesture.apply(items1);
  applyResult.type = require(5525) /* ComposedGestureName */.ComposedGestureName.Exclusive;
  return applyResult;
};
