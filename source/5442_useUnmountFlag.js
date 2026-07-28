// Module ID: 5442
// Function ID: 46513
// Name: useUnmountFlag
// Dependencies: [31]
// Exports: useUnmountFlag

// Module 5442 (useUnmountFlag)
import result from "result";

({ useRef: closure_0, useLayoutEffect: closure_1 } = result);

export const useUnmountFlag = function useUnmountFlag() {
  const tmp = callback(false);
  callback = tmp;
  callback2(() => {
    closure_0.current = false;
    return () => {
      outer1_0.current = true;
    };
  }, []);
  return tmp;
};
