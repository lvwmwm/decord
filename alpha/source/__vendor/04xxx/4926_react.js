// Module ID: 4926
// Function ID: 4927
// Name: react
// Dependencies: [19, 4925]
// Exports: useShallow

// Module 4926 (react)
import _slicedToArray from "_slicedToArray" /* 4925 */;
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
