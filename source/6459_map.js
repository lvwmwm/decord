// Module ID: 6459
// Function ID: 6460
// Name: map
// Dependencies: [6445, 6460, 6436]

// Module 6459 (map)
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
  const clonedAndRemappedConfig = require(6445) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map);
  const obj = require(6445) /* isGestureEnabled */;
  return require(6460) /* useGesture */.useGesture(require(6436) /* ComposedGestureName */.SingleGestureName.Tap, clonedAndRemappedConfig);
};
