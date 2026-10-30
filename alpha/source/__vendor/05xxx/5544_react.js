// Module ID: 5544
// Function ID: 5545
// Name: react
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 5544 (react)
import react from "react" /* 19 */;

let _window;
let map;
({ useRef: _window, useLayoutEffect: map } = react);

export const useUnmountFlag = () => {
  const tmp = React(false);
  const _window = tmp;
  map(() => {
    closure_0.current = false;
    return () => {
      closure_1_0.current = true;
    };
  }, []);
  return tmp;
};
