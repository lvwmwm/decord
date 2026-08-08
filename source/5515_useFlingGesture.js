// Module ID: 5515
// Function ID: 5516
// Name: useFlingGesture
// Dependencies: [5495, 5510, 5486]

// Module 5515 (useFlingGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5495) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5495) /* isGestureEnabled */;
  return require(5510) /* useGesture */.useGesture(require(5486) /* ComposedGestureName */.SingleGestureName.Fling, clonedAndRemappedConfig);
};
