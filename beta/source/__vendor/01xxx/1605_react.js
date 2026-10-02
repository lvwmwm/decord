// Module ID: 1605
// Function ID: 1606
// Name: react
// Dependencies: [19, 1567]
// Exports: useDeepStableValue

// Module 1605 (react)
import equalDefault from "equal" /* 1567 */;
import react from "react" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
