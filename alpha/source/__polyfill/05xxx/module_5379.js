// Module ID: 5379
// Function ID: 5380
// Dependencies: [5363, 5380, 5338, 5382]
// Exports: useGestureCallbacks

// Module 5379
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5363 */;
import react from "react" /* 5380 */;
import _mod5382 from "module_5382" /* 5382 */;


export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const obj = maybeExtractNativeEvent;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5338).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod5382;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler, reanimatedEventHandler, animatedEventHandler };
};
