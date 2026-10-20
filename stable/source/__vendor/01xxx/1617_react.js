// Module ID: 1617
// Function ID: 1618
// Name: react
// Dependencies: [19, 1579]
// Exports: useDeepStableValue

// Module 1617 (react)
import equalDefault from "equal" /* 1579 */;
import react from "react" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = react.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
