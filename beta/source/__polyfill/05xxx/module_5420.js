// Module ID: 5420
// Function ID: 5421
// Dependencies: [5397, 5412, 5388]
// Exports: useRotationGesture

// Module 5420
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5397 */;
import _mod5412 from "module_5412" /* 5412 */;

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

export const useRotationGesture = function useRotationGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_6;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  const obj2 = _mod5412;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
};
