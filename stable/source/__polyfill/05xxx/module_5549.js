// Module ID: 5549
// Function ID: 5550
// Dependencies: [5523, 5540, 5514]
// Exports: useRotationGesture

// Module 5549
import ComposedGestureName from "ComposedGestureName" /* 5514 */;
import _mod5523 from "module_5523" /* 5523 */;
import _mod5540 from "module_5540" /* 5540 */;

let tmp2;
let tmp3;
function transformRotationProps(arg0) {
  const obj = _mod5523;
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
  const obj = _mod5523;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  const obj2 = _mod5540;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
}
