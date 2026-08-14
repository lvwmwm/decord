// Module ID: 5576
// Function ID: 5577
// Name: useFlingGesture
// Dependencies: [5556, 5571, 5547]

// Module 5576 (useFlingGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5556) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5556) /* isGestureEnabled */;
  return require(5571) /* useGesture */.useGesture(require(5547) /* ComposedGestureName */.SingleGestureName.Fling, clonedAndRemappedConfig);
};
