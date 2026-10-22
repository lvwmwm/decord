// Module ID: 5367
// Function ID: 5368
// Dependencies: [5351, 5368, 5326, 5370]
// Exports: useGestureCallbacks

// Module 5367
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5351 */;
import react from "react" /* 5368 */;
import _mod5370 from "module_5370" /* 5370 */;


export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const obj = maybeExtractNativeEvent;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5326).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod5370;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler, reanimatedEventHandler, animatedEventHandler };
};
