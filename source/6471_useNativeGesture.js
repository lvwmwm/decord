// Module ID: 6471
// Function ID: 6472
// Name: useNativeGesture
// Dependencies: [6445, 6460, 6436]

// Module 6471 (useNativeGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(6445) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(6445) /* isGestureEnabled */;
  return require(6460) /* useGesture */.useGesture(require(6436) /* ComposedGestureName */.SingleGestureName.Native, clonedAndRemappedConfig);
};
