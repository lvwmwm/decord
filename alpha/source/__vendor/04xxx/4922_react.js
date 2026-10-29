// Module ID: 4922
// Function ID: 4923
// Name: react
// Dependencies: [19, 4921]
// Exports: useShallow

// Module 4922 (react)
import _slicedToArray from "_slicedToArray" /* 4921 */;
import react from "react" /* 19 */;


export function useShallow(cResult) {
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
}
