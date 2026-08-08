// Module ID: 5521
// Function ID: 5522
// Name: useNativeGesture
// Dependencies: [5495, 5510, 5486]

// Module 5521 (useNativeGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5495) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5495) /* isGestureEnabled */;
  return require(5510) /* useGesture */.useGesture(require(5486) /* ComposedGestureName */.SingleGestureName.Native, clonedAndRemappedConfig);
};
