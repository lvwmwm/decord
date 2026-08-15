// Module ID: 7085
// Function ID: 7086
// Name: useUnmountFlag
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 7085 (useUnmountFlag)
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
