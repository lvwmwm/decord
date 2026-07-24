// Module ID: 5304
// Function ID: 45798
// Name: useStableCallback
// Dependencies: [31]
// Exports: useStableCallback

// Module 5304 (useStableCallback)
import result from "result";

({ useCallback: closure_0, useEffect: closure_1, useLayoutEffect: closure_2, useRef: closure_3 } = result);

export const useStableCallback = function useStableCallback(arg0) {
  const callback = arg0;
  const callback2 = callback4(undefined);
  callback3(() => {
    closure_1.current = closure_0;
  });
  callback2(() => () => {
    outer1_1.current = undefined;
  }, []);
  return callback(() => {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    let applyResult;
    if (null != ref.current) {
      const current = ref.current;
      applyResult = current.apply(ref, array);
    }
    return applyResult;
  }, []);
};
