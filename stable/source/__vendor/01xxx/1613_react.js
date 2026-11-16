// Module ID: 1613
// Function ID: 1614
// Name: react
// Dependencies: [19, 1575]
// Exports: useDeepStableValue

// Module 1613 (react)
import equalDefault from "equal" /* 1575 */;
import react from "react" /* 19 */;


export function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
}
