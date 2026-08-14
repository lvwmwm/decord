// Module ID: 5597
// Function ID: 5598
// Name: useExclusiveGestures
// Dependencies: [5596, 5547]

// Module 5597 (useExclusiveGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [require(5547) /* ComposedGestureName */.ComposedGestureName.Exclusive, ...items];
  const applyResult = require(5596) /* useComposedGesture */.useComposedGesture.apply(items1);
  applyResult.type = require(5547) /* ComposedGestureName */.ComposedGestureName.Exclusive;
  return applyResult;
};
