// Module ID: 5582
// Function ID: 5583
// Name: useNativeGesture
// Dependencies: [5556, 5571, 5547]

// Module 5582 (useNativeGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5556) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5556) /* isGestureEnabled */;
  return require(5571) /* useGesture */.useGesture(require(5547) /* ComposedGestureName */.SingleGestureName.Native, clonedAndRemappedConfig);
};
