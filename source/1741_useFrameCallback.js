// Module ID: 1741
// Function ID: 19505
// Name: useFrameCallback
// Dependencies: [31, 1742]
// Exports: useFrameCallback

// Module 1741 (useFrameCallback)
import result from "result";
import importDefaultResult from "FrameCallbackRegistryJS";

let closure_0;
let closure_1;
({ useEffect: closure_0, useRef: closure_1 } = result);
importDefaultResult = new importDefaultResult();

export const useFrameCallback = function useFrameCallback(fn, arg1) {
  const callback = fn;
  const tmp = arguments.length > 1 && undefined !== arguments[1];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[1];
  }
  const obj = {
    setActive(isActive, arg1, self) {
      const result = outer1_2.manageStateFrameCallback(tmp3.current.callbackId, isActive);
      tmp3.current.isActive = isActive;
    },
    isActive: tmp2,
    callbackId: -1
  };
  const tmp3 = callback2(obj);
  callback2 = tmp3;
  const items = [fn, tmp2];
  callback(() => {
    tmp3.current.callbackId = outer1_2.registerFrameCallback(current);
    current = tmp3.current;
    current = tmp3.current;
    current.setActive(tmp3.current.isActive);
    return () => {
      const result = outer2_2.unregisterFrameCallback(current.callbackId);
      current.callbackId = -1;
    };
  }, items);
  return tmp3.current;
};
