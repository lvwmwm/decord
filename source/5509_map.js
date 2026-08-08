// Module ID: 5509
// Function ID: 5510
// Name: map
// Dependencies: [5495, 5510, 5486]

// Module 5509 (map)
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
  const clonedAndRemappedConfig = require(5495) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map);
  const obj = require(5495) /* isGestureEnabled */;
  return require(5510) /* useGesture */.useGesture(require(5486) /* ComposedGestureName */.SingleGestureName.Tap, clonedAndRemappedConfig);
};
