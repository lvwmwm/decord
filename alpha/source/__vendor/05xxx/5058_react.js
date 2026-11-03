// Module ID: 5058
// Function ID: 5059
// Name: react
// Dependencies: [19, 5057]
// Exports: useShallow

// Module 5058 (react)
import _slicedToArray from "_slicedToArray" /* 5057 */;
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
