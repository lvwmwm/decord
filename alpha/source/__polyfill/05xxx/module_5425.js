// Module ID: 5425
// Function ID: 5426
// Dependencies: [5402, 5417, 5393]
// Exports: useRotationGesture

// Module 5425
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5402 */;
import _mod5417 from "module_5417" /* 5417 */;

function transformRotationProps(arg0) {
  const obj = maybeExtractNativeEvent;
  arg0.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(rotation, rotation2) {
  let rotationChange;
  rotation = rotation.rotation;
  if (rotation2) {
    rotationChange = rotation - rotation2.rotation;
  } else {
    rotationChange = rotation;
  }
  return { rotationChange };
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 14071129947311;
diffCalculator.__initData = { code: "function diffCalculator_Pnpm_useRotationGestureTs1(current,previous){return{rotationChange:previous?current.rotation-previous.rotation:current.rotation};}" };
function fillInDefaultValues(arg0) {
  arg0.rotationChange = 0;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 2470118803733;
fillInDefaultValues.__initData = { code: "function fillInDefaultValues_Pnpm_useRotationGestureTs2(event){event.rotationChange=0;}" };
const map = new Map();
let closure_6 = {};

export function useRotationGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_6;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  const obj2 = _mod5417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
}
