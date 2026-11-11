// Module ID: 5632
// Function ID: 5633
// Dependencies: [5606, 5623, 5597]
// Exports: useRotationGesture

// Module 5632
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5606 from "module_5606" /* 5606 */;
import _mod5623 from "module_5623" /* 5623 */;

let tmp2;
let tmp3;
function transformRotationProps(arg0) {
  const obj = _mod5606;
  arg0.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
const items = [{ code: "(function diffCalculator_Pnpm_useRotationGestureTs1(current,previous){return{rotationChange:previous?current.rotation-previous.rotation:current.rotation};})" }];
[tmp2] = items;
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
diffCalculator.__workletHash = 4592561053326;
diffCalculator.__initData = tmp2;
const items1 = [{ code: "(function fillInDefaultValues_Pnpm_useRotationGestureTs2(event){event.rotationChange=0;})" }];
[tmp3] = items1;
function fillInDefaultValues(arg0) {
  arg0.rotationChange = 0;
}
fillInDefaultValues.__workletHash = 4459233048852;
fillInDefaultValues.__initData = tmp3;
const map = new Map();
let closure_6 = {};

export function useRotationGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const obj = _mod5606;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  const obj2 = _mod5623;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
}
