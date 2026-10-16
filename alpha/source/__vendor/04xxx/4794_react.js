// Module ID: 4794
// Function ID: 4795
// Name: react
// Dependencies: [19, 4793]
// Exports: useShallow

// Module 4794 (react)
import _slicedToArray from "_slicedToArray" /* 4793 */;
import react from "react" /* 19 */;


export const useShallow = function useShallow(cResult) {
  const ref = react.useRef(undefined);
  return (arg0) => {
    let current = cResult(arg0);
    const obj = _slicedToArray;
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      ref.current = current;
    }
    return current;
  };
};
