// Module ID: 4929
// Function ID: 4930
// Name: react
// Dependencies: [19, 4928]
// Exports: useShallow

// Module 4929 (react)
import _slicedToArray from "_slicedToArray" /* 4928 */;
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
