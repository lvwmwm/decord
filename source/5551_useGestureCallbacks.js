// Module ID: 5551
// Function ID: 5552
// Name: useGestureCallbacks
// Dependencies: [5535, 5552, 5510, 5554]

// Module 5551 (useGestureCallbacks)
const require = arg1;
const dependencyMap = arg6;
arg5.useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = require(5535) /* isGestureEnabled */.useMemoizedGestureCallbacks(disableReanimated);
  const obj = require(5535) /* isGestureEnabled */;
  let reanimatedEventHandler;
  const obj2 = require(5552) /* useGestureEventHandler */;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5510).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(5554);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: require(5552) /* useGestureEventHandler */.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
