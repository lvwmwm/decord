// Module ID: 4920
// Function ID: 4921
// Name: react
// Dependencies: [19, 4919]
// Exports: useShallow

// Module 4920 (react)
import _slicedToArray from "_slicedToArray" /* 4919 */;
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
