// Module ID: 5556
// Function ID: 5557
// Name: transformPinchProps
// Dependencies: [5534, 5549, 5525]

// Module 5556 (transformPinchProps)
const require = arg1;
const dependencyMap = arg6;
function transformPinchProps(arg0) {
  arg0.changeEventCalculator = require(5534) /* isGestureEnabled */.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(scale, scale2) {
  scale = scale.scale;
  if (scale2) {
    let scaleChange = scale / scale2.scale;
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
arg5.usePinchGesture = function usePinchGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = require(5534) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map, transformPinchProps);
  const obj = require(5534) /* isGestureEnabled */;
  return require(5549) /* useGesture */.useGesture(require(5525) /* ComposedGestureName */.SingleGestureName.Pinch, clonedAndRemappedConfig);
};
