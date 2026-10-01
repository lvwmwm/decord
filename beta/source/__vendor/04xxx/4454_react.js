// Module ID: 4454
// Function ID: 4455
// Name: react
// Dependencies: [19, 4453]
// Exports: useShallow

// Module 4454 (react)
import _slicedToArray from "_slicedToArray" /* 4453 */;
import react from "react" /* 19 */;


export const useShallow = function useShallow(arg0) {
  let closure_0 = arg0;
  const ref = react.useRef(undefined);
  return (arg0) => {
    let current = closure_0(arg0);
    const obj = _slicedToArray;
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      ref.current = current;
    }
    return current;
  };
};
