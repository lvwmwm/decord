// Module ID: 6704
// Function ID: 6705
// Name: useExclusiveGestures
// Dependencies: [6703, 6654]

// Module 6704 (useExclusiveGestures)
import ComposedGestureName from "ComposedGestureName" /* 6654 */;
import useComposedGesture from "useComposedGesture" /* 6703 */;

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
