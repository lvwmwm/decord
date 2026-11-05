// Module ID: 5520
// Function ID: 5521
// Name: react
// Dependencies: [19, 5521]
// Exports: useGestureEventHandler

// Module 5520 (react)
import react from "react" /* 19 */;

let useMemo = react.useMemo;

export function useGestureEventHandler(arg0, memoizedGestureCallbacks, disableReanimated) {
  let closure_0 = arg0;
  let closure_1 = memoizedGestureCallbacks;
  useMemo = disableReanimated;
  const tmp = useMemo(() => ({ lastUpdateEvent: "ti" }), []);
  let closure_3 = tmp;
  const items = [arg0, memoizedGestureCallbacks, , , , ];
  ({ changeEventCalculator: arr[2], dispatchesAnimatedEvents: arr[3], fillInDefaultValues: arr[4] } = disableReanimated);
  items[5] = tmp;
  return useMemo(() => (arg0) => {
    const obj = closure_0(closure_1[1]);
    obj.eventHandler(closure_1_0, arg0, closure_1_1, disableReanimated.changeEventCalculator, closure_1_3, disableReanimated.dispatchesAnimatedEvents, disableReanimated.fillInDefaultValues);
  }, items);
}
