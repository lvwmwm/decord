// Module ID: 5417
// Function ID: 5418
// Dependencies: [5401, 5418, 5376, 5420]
// Exports: useGestureCallbacks

// Module 5417
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5401 */;
import react from "react" /* 5418 */;
import _mod5420 from "module_5420" /* 5420 */;


export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const obj = maybeExtractNativeEvent;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5376).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = _mod5420;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler, reanimatedEventHandler, animatedEventHandler };
};
