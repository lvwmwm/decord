// Module ID: 5555
// Function ID: 5556
// Name: useUnmountFlag
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 5555 (useUnmountFlag)
import noop from "noop";

let c0;
let closure_1;
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
