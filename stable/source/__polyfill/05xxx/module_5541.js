// Module ID: 5541
// Function ID: 5542
// Dependencies: [5523, 5542, 5496, 5544]
// Exports: useGestureCallbacks

// Module 5541
import _mod5523 from "module_5523" /* 5523 */;
import react from "react" /* 5542 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5544 */;

let closure_2 = {};

export function useGestureCallbacks(arg0, disableReanimated) {
  const obj = _mod5523;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    let tmp6 = memoizedGestureCallbacks;
    if (true === disableReanimated.runOnJS) {
      tmp6 = closure_2;
    }
    const Reanimated = tmp(5496).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(tmp6);
    }
    const tmpResult = useReanimatedEventHandler;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(arg0, tmp6, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler, reanimatedEventHandler, animatedEventHandler };
}
