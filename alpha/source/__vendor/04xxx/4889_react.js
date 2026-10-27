// Module ID: 4889
// Function ID: 4890
// Name: react
// Dependencies: [19, 4888]
// Exports: useShallow

// Module 4889 (react)
import _slicedToArray from "_slicedToArray" /* 4888 */;
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
