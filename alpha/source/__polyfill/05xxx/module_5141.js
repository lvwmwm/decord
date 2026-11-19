// Module ID: 5141
// Function ID: 5142
// Dependencies: [5123, 5142, 5096, 5144]
// Exports: useGestureCallbacks

// Module 5141
import _mod5123 from "module_5123" /* 5123 */;
import react from "react" /* 5142 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5144 */;

let closure_2 = {};

export function useGestureCallbacks(arg0, disableReanimated) {
  const obj = _mod5123;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    let tmp6 = memoizedGestureCallbacks;
    if (true === disableReanimated.runOnJS) {
      tmp6 = closure_2;
    }
    const Reanimated = tmp(5096).Reanimated;
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
