// Module ID: 5557
// Function ID: 5558
// Name: transformRotationProps
// Dependencies: [5534, 5549, 5525]

// Module 5557 (transformRotationProps)
const require = arg1;
const dependencyMap = arg6;
function transformRotationProps(arg0) {
  arg0.changeEventCalculator = require(5534) /* isGestureEnabled */.getChangeEventCalculator(diffCalculator);
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
  const clonedAndRemappedConfig = require(5534) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  const obj = require(5534) /* isGestureEnabled */;
  return require(5549) /* useGesture */.useGesture(require(5525) /* ComposedGestureName */.SingleGestureName.Rotation, clonedAndRemappedConfig);
};
