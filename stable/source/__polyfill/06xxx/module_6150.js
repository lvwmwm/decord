// Module ID: 6150
// Function ID: 6151
// Dependencies: [6134, 6151, 6109, 6153]
// Exports: useGestureCallbacks

// Module 6150
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6134 */;
import react from "react" /* 6151 */;
import _mod6153 from "module_6153" /* 6153 */;


export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const obj = maybeExtractNativeEvent;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(6109).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod6153;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler, reanimatedEventHandler, animatedEventHandler };
};
