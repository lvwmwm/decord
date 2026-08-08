// Module ID: 5536
// Function ID: 5537
// Name: useExclusiveGestures
// Dependencies: [5535, 5486]

// Module 5536 (useExclusiveGestures)
const require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [require(5486) /* ComposedGestureName */.ComposedGestureName.Exclusive, ...items];
  const applyResult = require(5535) /* useComposedGesture */.useComposedGesture.apply(items1);
  applyResult.type = require(5486) /* ComposedGestureName */.ComposedGestureName.Exclusive;
  return applyResult;
};
