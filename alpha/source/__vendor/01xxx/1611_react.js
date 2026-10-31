// Module ID: 1611
// Function ID: 1612
// Name: react
// Dependencies: [19, 1573]
// Exports: useDeepStableValue

// Module 1611 (react)
import equalDefault from "equal" /* 1573 */;
import react from "react" /* 19 */;


export function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
