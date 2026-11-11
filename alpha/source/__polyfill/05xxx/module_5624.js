// Module ID: 5624
// Function ID: 5625
// Dependencies: [5606, 5625, 5579, 5627]
// Exports: useGestureCallbacks

// Module 5624
import _mod5606 from "module_5606" /* 5606 */;
import react from "react" /* 5625 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5627 */;

let closure_2 = {};

export function useGestureCallbacks(arg0, disableReanimated) {
  const obj = _mod5606;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    let tmp6 = memoizedGestureCallbacks;
    if (true === disableReanimated.runOnJS) {
      tmp6 = closure_2;
    }
    const Reanimated = tmp(5579).Reanimated;
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
