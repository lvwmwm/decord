// Module ID: 5511
// Function ID: 5512
// Name: useGestureCallbacks
// Dependencies: [5495, 5512, 5470, 5514]

// Module 5511 (useGestureCallbacks)
const require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = require(5495) /* isGestureEnabled */.useMemoizedGestureCallbacks(disableReanimated);
  const obj = require(5495) /* isGestureEnabled */;
  let reanimatedEventHandler;
  const obj2 = require(5512) /* useGestureEventHandler */;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5470).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5514);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: require(5512) /* useGestureEventHandler */.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
