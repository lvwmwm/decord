// Module ID: 5555
// Function ID: 5556
// Name: useFlingGesture
// Dependencies: [5535, 5550, 5526]

// Module 5555 (useFlingGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5535) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5535) /* isGestureEnabled */;
  return require(5550) /* useGesture */.useGesture(require(5526) /* ComposedGestureName */.SingleGestureName.Fling, clonedAndRemappedConfig);
};
