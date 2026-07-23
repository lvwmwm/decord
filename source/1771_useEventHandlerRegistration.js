// Module ID: 1771
// Function ID: 19738
// Name: useEventHandlerRegistration
// Dependencies: [31, 27, 1772]
// Exports: useAnimatedValue, useEventHandlerRegistration

// Module 1771 (useEventHandlerRegistration)
import { useRef } from "result";
import { Animated } from "get ActivityIndicator";


export function useEventHandlerRegistration(arg0) {
  let closure_0 = arg0;
  return function onRegisterHandler(arg0) {
    function attachWorkletHandlers() {
      const findNodeHandleResult = ref(outer2_1[2]).findNodeHandle(ref.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in ref) {
          obj2.workletEventHandler.registerForEvents(findNodeHandleResult);
          const workletEventHandler = obj2.workletEventHandler;
        } else {
          obj2.registerForEvents(findNodeHandleResult);
        }
      }
    }
    if (arg0.current) {
      const result = attachWorkletHandlers();
    } else {
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(attachWorkletHandlers);
    }
    return () => {
      const findNodeHandleResult = ref(outer2_1[2]).findNodeHandle(ref.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in ref) {
          obj2.workletEventHandler.unregisterFromEvents(findNodeHandleResult);
          const workletEventHandler = obj2.workletEventHandler;
        } else {
          obj2.unregisterFromEvents(findNodeHandleResult);
        }
      }
    };
  };
}
export const useAnimatedValue = function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null === tmp.current) {
    const Value = Animated.Value;
    const prototype = Value.prototype;
    const value = new Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};
