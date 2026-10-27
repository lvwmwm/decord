// Module ID: 1619
// Function ID: 1620
// Name: react
// Dependencies: [19, 1581]
// Exports: useDeepStableValue

// Module 1619 (react)
import equalDefault from "equal" /* 1581 */;
import react from "react" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
