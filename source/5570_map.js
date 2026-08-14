// Module ID: 5570
// Function ID: 5571
// Name: map
// Dependencies: [5556, 5571, 5547]

// Module 5570 (map)
const require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};
arg5.useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = require(5556) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map);
  const obj = require(5556) /* isGestureEnabled */;
  return require(5571) /* useGesture */.useGesture(require(5547) /* ComposedGestureName */.SingleGestureName.Tap, clonedAndRemappedConfig);
};
