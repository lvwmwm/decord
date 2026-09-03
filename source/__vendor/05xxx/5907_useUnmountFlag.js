// Module ID: 5907
// Function ID: 5908
// Name: useUnmountFlag
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 5907 (useUnmountFlag)
import noop from "noop" /* 19 */;

({ useRef: c0, useLayoutEffect: closure_1 } = noop);

export const useUnmountFlag = () => {
  const tmp = callback(false);
  callback = tmp;
  callback2(() => {
    closure_0.current = false;
    return () => {
      closure_0.current = true;
    };
  }, []);
  return tmp;
};
