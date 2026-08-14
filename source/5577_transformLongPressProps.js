// Module ID: 5577
// Function ID: 5578
// Name: transformLongPressProps
// Dependencies: [5556, 5571, 5547]

// Module 5577 (transformLongPressProps)
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
  const clonedAndRemappedConfig = require(5556) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj = require(5556) /* isGestureEnabled */;
  return require(5571) /* useGesture */.useGesture(require(5547) /* ComposedGestureName */.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
