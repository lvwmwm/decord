// Module ID: 6424
// Function ID: 6425
// Dependencies: [6402, 6417, 6393]
// Exports: usePinchGesture

// Module 6424
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

function transformPinchProps(arg0) {
  const obj = maybeExtractNativeEvent;
  arg0.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(scale, scale2) {
  let scaleChange;
  scale = scale.scale;
  if (scale2) {
    scaleChange = scale / scale2.scale;
  } else {
    scaleChange = scale;
  }
  return { scaleChange };
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 7517335332069;
diffCalculator.__initData = { code: "function diffCalculator_Pnpm_usePinchGestureTs1(current,previous){return{scaleChange:previous?current.scale/previous.scale:current.scale};}" };
function fillInDefaultValues(arg0) {
  arg0.scaleChange = 1;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 10393435493424;
fillInDefaultValues.__initData = { code: "function fillInDefaultValues_Pnpm_usePinchGestureTs2(event){event.scaleChange=1;}" };
const map = new Map();
let closure_6 = {};

export const usePinchGesture = function usePinchGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_6;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformPinchProps);
  const obj2 = _mod6417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Pinch, clonedAndRemappedConfig);
};
