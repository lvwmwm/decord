// Module ID: 5518
// Function ID: 5519
// Name: transformRotationProps
// Dependencies: [5495, 5510, 5486]

// Module 5518 (transformRotationProps)
const require = arg1;
const dependencyMap = arg6;
function transformRotationProps(arg0) {
  arg0.changeEventCalculator = require(5495) /* isGestureEnabled */.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(rotation, rotation2) {
  rotation = rotation.rotation;
  if (rotation2) {
    let rotationChange = rotation - rotation2.rotation;
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
arg5.useRotationGesture = function useRotationGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = require(5495) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  const obj = require(5495) /* isGestureEnabled */;
  return require(5510) /* useGesture */.useGesture(require(5486) /* ComposedGestureName */.SingleGestureName.Rotation, clonedAndRemappedConfig);
};
