// Module ID: 1612
// Function ID: 1613
// Name: react
// Dependencies: [19, 1574]
// Exports: useDeepStableValue

// Module 1612 (react)
import equalDefault from "equal" /* 1574 */;
import react from "react" /* 19 */;


export function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
