// Module ID: 1616
// Function ID: 1617
// Name: react
// Dependencies: [19, 1578]
// Exports: useDeepStableValue

// Module 1616 (react)
import equalDefault from "equal" /* 1578 */;
import react from "react" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
