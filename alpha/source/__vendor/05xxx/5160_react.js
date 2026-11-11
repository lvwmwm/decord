// Module ID: 5160
// Function ID: 5161
// Name: react
// Dependencies: [19, 5159]
// Exports: useShallow

// Module 5160 (react)
import _slicedToArray from "_slicedToArray" /* 5159 */;
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
