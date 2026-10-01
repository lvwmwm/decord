// Module ID: 1599
// Function ID: 1600
// Name: react
// Dependencies: [19, 1561]
// Exports: useDeepStableValue

// Module 1599 (react)
import equalDefault from "equal" /* 1561 */;
import react from "react" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
