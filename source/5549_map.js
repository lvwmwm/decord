// Module ID: 5549
// Function ID: 5550
// Name: map
// Dependencies: [5535, 5550, 5526]

// Module 5549 (map)
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
  const clonedAndRemappedConfig = require(5535) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map);
  const obj = require(5535) /* isGestureEnabled */;
  return require(5550) /* useGesture */.useGesture(require(5526) /* ComposedGestureName */.SingleGestureName.Tap, clonedAndRemappedConfig);
};
