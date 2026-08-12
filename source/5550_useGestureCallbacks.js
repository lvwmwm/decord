// Module ID: 5550
// Function ID: 5551
// Name: useGestureCallbacks
// Dependencies: [5534, 5551, 5509, 5553]

// Module 5550 (useGestureCallbacks)
const require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = require(5534) /* isGestureEnabled */.useMemoizedGestureCallbacks(disableReanimated);
  const obj = require(5534) /* isGestureEnabled */;
  let reanimatedEventHandler;
  const obj2 = require(5551) /* useGestureEventHandler */;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5509).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5553);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: require(5551) /* useGestureEventHandler */.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
