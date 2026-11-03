// Module ID: 5510
// Function ID: 5511
// Dependencies: [5494, 5511, 5469, 5513]
// Exports: useGestureCallbacks

// Module 5510
import _mod5494 from "module_5494" /* 5494 */;
import react from "react" /* 5511 */;
import useReanimatedEventHandler from "useReanimatedEventHandler" /* 5513 */;


export function useGestureCallbacks(arg0, disableReanimated) {
  const obj = _mod5494;
  const memoizedGestureCallbacks = obj.useMemoizedGestureCallbacks(disableReanimated);
  let reanimatedEventHandler;
  const obj2 = react;
  const jsEventHandler = obj2.useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated);
  if (!disableReanimated.disableReanimated) {
    const Reanimated = tmp(5469).Reanimated;
    let handler;
    if (Reanimated != null) {
      handler = Reanimated.useHandler(memoizedGestureCallbacks);
    }
    const tmpResult = useReanimatedEventHandler;
    reanimatedEventHandler = tmpResult.useReanimatedEventHandler(arg0, memoizedGestureCallbacks, handler, disableReanimated.changeEventCalculator, disableReanimated.fillInDefaultValues);
  }
  let animatedEventHandler;
  if (disableReanimated.dispatchesAnimatedEvents) {
    animatedEventHandler = disableReanimated.onUpdate;
  }
  return { jsEventHandler, reanimatedEventHandler, animatedEventHandler };
}
