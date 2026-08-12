// Module ID: 5560
// Function ID: 5561
// Name: useNativeGesture
// Dependencies: [5534, 5549, 5525]

// Module 5560 (useNativeGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5534) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5534) /* isGestureEnabled */;
  return require(5549) /* useGesture */.useGesture(require(5525) /* ComposedGestureName */.SingleGestureName.Native, clonedAndRemappedConfig);
};
