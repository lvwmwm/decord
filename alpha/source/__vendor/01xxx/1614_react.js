// Module ID: 1614
// Function ID: 1615
// Name: react
// Dependencies: [19, 1576]
// Exports: useDeepStableValue

// Module 1614 (react)
import equalDefault from "equal" /* 1576 */;
import react from "react" /* 19 */;


export function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
