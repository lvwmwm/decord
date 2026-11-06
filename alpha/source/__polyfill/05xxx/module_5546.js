// Module ID: 5546
// Function ID: 5547
// Dependencies: [5521, 5538, 5512]
// Exports: usePinchGesture

// Module 5546
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5521 from "module_5521" /* 5521 */;
import _mod5538 from "module_5538" /* 5538 */;

let tmp2;
let tmp3;
function transformPinchProps(arg0) {
  const obj = _mod5521;
  arg0.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
const items = [{ code: "(function diffCalculator_Pnpm_usePinchGestureTs1(current,previous){return{scaleChange:previous?current.scale/previous.scale:current.scale};})" }];
[tmp2] = items;
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
diffCalculator.__workletHash = 797719799396;
diffCalculator.__initData = tmp2;
const items1 = [{ code: "(function fillInDefaultValues_Pnpm_usePinchGestureTs2(event){event.scaleChange=1;})" }];
[tmp3] = items1;
function fillInDefaultValues(arg0) {
  arg0.scaleChange = 1;
}
fillInDefaultValues.__workletHash = 16688050895505;
fillInDefaultValues.__initData = tmp3;
const map = new Map();
let closure_6 = {};

export function usePinchGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const obj = _mod5521;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformPinchProps);
  const obj2 = _mod5538;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Pinch, clonedAndRemappedConfig);
}
