// Module ID: 5143
// Function ID: 5144
// Dependencies: [5125, 5144, 5098, 5146]
// Exports: useGestureCallbacks

// Module 5143
import _mod5125 from "module_5125" /* 5125 */;
import react from "react" /* 5144 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5146 */;

let closure_2 = {};

export function useGestureCallbacks(arg0, disableReanimated) {
  const obj = _mod5125;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    let tmp6 = memoizedGestureCallbacks;
    if (true === disableReanimated.runOnJS) {
      tmp6 = closure_2;
    }
    const Reanimated = tmp(5098).Reanimated;
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
