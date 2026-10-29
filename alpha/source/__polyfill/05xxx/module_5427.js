// Module ID: 5427
// Function ID: 5428
// Dependencies: [5402, 5417, 5393]
// Exports: useManualGesture

// Module 5427
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5402 */;
import _mod5417 from "module_5417" /* 5417 */;

let closure_2 = {};

export function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
