// Module ID: 5262
// Function ID: 5263
// Dependencies: [5244, 5263, 5217, 5265]
// Exports: useGestureCallbacks

// Module 5262
import _mod5244 from "module_5244" /* 5244 */;
import react from "react" /* 5263 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5265 */;

let closure_2 = {};

export function useGestureCallbacks(arg0, disableReanimated) {
  const obj = _mod5244;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    let tmp6 = memoizedGestureCallbacks;
    if (true === disableReanimated.runOnJS) {
      tmp6 = closure_2;
    }
    const Reanimated = tmp(5217).Reanimated;
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
