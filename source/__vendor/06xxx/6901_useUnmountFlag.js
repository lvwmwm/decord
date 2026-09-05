// Module ID: 6901
// Function ID: 6902
// Name: useUnmountFlag
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 6901 (useUnmountFlag)
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
