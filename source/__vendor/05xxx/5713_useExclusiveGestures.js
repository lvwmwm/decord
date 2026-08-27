// Module ID: 5713
// Function ID: 5714
// Name: useExclusiveGestures
// Dependencies: [5712, 5663]

// Module 5713 (useExclusiveGestures)
import ComposedGestureName from "ComposedGestureName" /* 5663 */;
import useComposedGesture from "useComposedGesture" /* 5712 */;

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
