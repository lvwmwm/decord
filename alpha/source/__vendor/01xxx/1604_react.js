// Module ID: 1604
// Function ID: 1605
// Name: react
// Dependencies: [19, 1566]
// Exports: useDeepStableValue

// Module 1604 (react)
import equalDefault from "equal" /* 1566 */;
import react from "react" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
