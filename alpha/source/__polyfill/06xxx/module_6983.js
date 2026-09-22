// Module ID: 6983
// Function ID: 6984
// Dependencies: [6967, 6984, 6942, 6986]
// Exports: useGestureCallbacks

// Module 6983
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6967 */;
import _mod6984 from "module_6984" /* 6984 */;

require = arg1;
const dependencyMap = arg6;

export const useGestureCallbacks = function useGestureCallbacks(handlerTag, disableReanimated) {
  const memoizedGestureCallbacks = DEFAULT_PROPS_TRANSFORMER.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(6942).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = tmp(6986);
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(handlerTag, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler: _mod6984.useGestureEventHandler(handlerTag, memoizedGestureCallbacks, disableReanimated), reanimatedEventHandler, animatedEventHandler };
};
