// Module ID: 6679
// Function ID: 6680
// Name: useGestureCallbacks
// Dependencies: [6663, 6680, 6638, 6682]

// Module 6679 (useGestureCallbacks)
import isGestureEnabled from "isGestureEnabled" /* 6663 */;
import useGestureEventHandler from "useGestureEventHandler" /* 6680 */;

require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = isGestureEnabled.useMemoizedGestureCallbacks(disableReanimated);
  const obj = isGestureEnabled;
  let reanimatedEventHandler;
  const obj2 = useGestureEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(6638).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(6682);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: useGestureEventHandler.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
