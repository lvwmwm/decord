// Module ID: 1615
// Function ID: 1616
// Name: react
// Dependencies: [19, 1577]
// Exports: useDeepStableValue

// Module 1615 (react)
import equalDefault from "equal" /* 1577 */;
import react from "react" /* 19 */;


export function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
