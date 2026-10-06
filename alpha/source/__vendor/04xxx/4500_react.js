// Module ID: 4500
// Function ID: 4501
// Name: react
// Dependencies: [19, 4499]
// Exports: useShallow

// Module 4500 (react)
import _slicedToArray from "_slicedToArray" /* 4499 */;
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
