// Module ID: 6466
// Function ID: 6467
// Name: transformLongPressProps
// Dependencies: [6445, 6460, 6436]

// Module 6466 (transformLongPressProps)
const require = arg1;
const dependencyMap = arg6;
function transformLongPressProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [["minDuration", "minDurationMs"], ["maxDistance", "maxDist"]];
const map = new Map(items);
let closure_4 = {};
arg5.useLongPressGesture = function useLongPressGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = require(6445) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj = require(6445) /* isGestureEnabled */;
  return require(6460) /* useGesture */.useGesture(require(6436) /* ComposedGestureName */.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
