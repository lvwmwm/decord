// Module ID: 4960
// Function ID: 4961
// Name: react
// Dependencies: [19, 4959]
// Exports: useShallow

// Module 4960 (react)
import _slicedToArray from "_slicedToArray" /* 4959 */;
import react from "react" /* 19 */;


export function useShallow(arg0) {
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
}
