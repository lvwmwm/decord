// Module ID: 5374
// Function ID: 5375
// Dependencies: [5351, 5366, 5342]
// Exports: useRotationGesture

// Module 5374
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5351 */;
import _mod5366 from "module_5366" /* 5366 */;

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
  const obj2 = _mod5366;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
};
