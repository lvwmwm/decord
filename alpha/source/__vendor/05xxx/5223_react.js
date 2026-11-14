// Module ID: 5223
// Function ID: 5224
// Name: react
// Dependencies: [19, 5222]
// Exports: useShallow

// Module 5223 (react)
import _slicedToArray from "_slicedToArray" /* 5222 */;
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
