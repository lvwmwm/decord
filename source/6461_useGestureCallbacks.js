// Module ID: 6461
// Function ID: 6462
// Name: useGestureCallbacks
// Dependencies: [6445, 6462, 6420, 6464]

// Module 6461 (useGestureCallbacks)
const require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = require(6445) /* isGestureEnabled */.useMemoizedGestureCallbacks(disableReanimated);
  const obj = require(6445) /* isGestureEnabled */;
  let reanimatedEventHandler;
  const obj2 = require(6462) /* useGestureEventHandler */;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(6420).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(6464);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: require(6462) /* useGestureEventHandler */.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
