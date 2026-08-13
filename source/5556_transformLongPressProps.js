// Module ID: 5556
// Function ID: 5557
// Name: transformLongPressProps
// Dependencies: [5535, 5550, 5526]

// Module 5556 (transformLongPressProps)
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
  const clonedAndRemappedConfig = require(5535) /* isGestureEnabled */.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj = require(5535) /* isGestureEnabled */;
  return require(5550) /* useGesture */.useGesture(require(5526) /* ComposedGestureName */.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
