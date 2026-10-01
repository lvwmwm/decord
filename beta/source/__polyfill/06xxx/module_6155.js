// Module ID: 6155
// Function ID: 6156
// Dependencies: [6141, 6156, 6132]
// Exports: useTapGesture

// Module 6155
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map);
  const obj2 = _mod6156;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
