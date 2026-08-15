// Module ID: 6486
// Function ID: 6487
// Name: useExclusiveGestures
// Dependencies: [6485, 6436]

// Module 6486 (useExclusiveGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [require(6436) /* ComposedGestureName */.ComposedGestureName.Exclusive, ...items];
  const applyResult = require(6485) /* useComposedGesture */.useComposedGesture.apply(items1);
  applyResult.type = require(6436) /* ComposedGestureName */.ComposedGestureName.Exclusive;
  return applyResult;
};
