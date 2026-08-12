// Module ID: 5548
// Function ID: 5549
// Name: map
// Dependencies: [5534, 5549, 5525]

// Module 5548 (map)
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
  const clonedAndRemappedConfig = require(5534) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map);
  const obj = require(5534) /* isGestureEnabled */;
  return require(5549) /* useGesture */.useGesture(require(5525) /* ComposedGestureName */.SingleGestureName.Tap, clonedAndRemappedConfig);
};
