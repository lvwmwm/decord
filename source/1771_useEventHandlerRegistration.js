// Module ID: 1771
// Function ID: 19732
// Name: useEventHandlerRegistration
// Dependencies: []
// Exports: useAnimatedValue, useEventHandlerRegistration

// Module 1771 (useEventHandlerRegistration)
const useRef = require(dependencyMap[0]).useRef;
const Animated = require(dependencyMap[1]).Animated;

export function useEventHandlerRegistration(arg0) {
  const require = arg0;
  return function onRegisterHandler(arg0) {
    function attachWorkletHandlers() {
      const findNodeHandleResult = arg0(closure_1[2]).findNodeHandle(arg0.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in arg0) {
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
      const findNodeHandleResult = arg0(closure_1[2]).findNodeHandle(arg0.current);
      if (findNodeHandleResult) {
        if ("workletEventHandler" in arg0) {
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
