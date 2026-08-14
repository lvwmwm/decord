// Module ID: 5572
// Function ID: 5573
// Name: useGestureCallbacks
// Dependencies: [5556, 5573, 5531, 5575]

// Module 5572 (useGestureCallbacks)
const require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = require(5556) /* isGestureEnabled */.useMemoizedGestureCallbacks(disableReanimated);
  const obj = require(5556) /* isGestureEnabled */;
  let reanimatedEventHandler;
  const obj2 = require(5573) /* useGestureEventHandler */;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5531).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5575);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: require(5573) /* useGestureEventHandler */.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
