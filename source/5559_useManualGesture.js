// Module ID: 5559
// Function ID: 5560
// Name: useManualGesture
// Dependencies: [5534, 5549, 5525]

// Module 5559 (useManualGesture)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = require(5534) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp);
  const obj = require(5534) /* isGestureEnabled */;
  return require(5549) /* useGesture */.useGesture(require(5525) /* ComposedGestureName */.SingleGestureName.Manual, clonedAndRemappedConfig);
};
