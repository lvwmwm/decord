// Module ID: 6470
// Function ID: 6471
// Name: useManualGesture
// Dependencies: [6445, 6460, 6436]

// Module 6470 (useManualGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(6445) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(6445) /* isGestureEnabled */;
  return require(6460) /* useGesture */.useGesture(require(6436) /* ComposedGestureName */.SingleGestureName.Manual, clonedAndRemappedConfig);
};
