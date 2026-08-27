// Module ID: 5850
// Function ID: 5851
// Name: useUnmountFlag
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 5850 (useUnmountFlag)
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
