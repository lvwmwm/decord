// Module ID: 5560
// Function ID: 5561
// Name: useManualGesture
// Dependencies: [5535, 5550, 5526]

// Module 5560 (useManualGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5535) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5535) /* isGestureEnabled */;
  return require(5550) /* useGesture */.useGesture(require(5526) /* ComposedGestureName */.SingleGestureName.Manual, clonedAndRemappedConfig);
};
