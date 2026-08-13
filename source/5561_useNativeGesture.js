// Module ID: 5561
// Function ID: 5562
// Name: useNativeGesture
// Dependencies: [5535, 5550, 5526]

// Module 5561 (useNativeGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5535) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5535) /* isGestureEnabled */;
  return require(5550) /* useGesture */.useGesture(require(5526) /* ComposedGestureName */.SingleGestureName.Native, clonedAndRemappedConfig);
};
