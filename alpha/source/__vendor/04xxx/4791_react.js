// Module ID: 4791
// Function ID: 4792
// Name: react
// Dependencies: [19, 4790]
// Exports: useShallow

// Module 4791 (react)
import _slicedToArray from "_slicedToArray" /* 4790 */;
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
