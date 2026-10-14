// Module ID: 4737
// Function ID: 4738
// Name: react
// Dependencies: [19, 4736]
// Exports: useShallow

// Module 4737 (react)
import _slicedToArray from "_slicedToArray" /* 4736 */;
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
