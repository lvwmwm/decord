// Module ID: 5508
// Function ID: 5509
// Dependencies: [5494, 5509, 5485]
// Exports: useTapGesture

// Module 5508
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5494 from "module_5494" /* 5494 */;
import _mod5509 from "module_5509" /* 5509 */;

const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const obj = _mod5494;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map);
  const obj2 = _mod5509;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
