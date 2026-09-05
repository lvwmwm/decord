// Module ID: 1597
// Function ID: 1598
// Name: useDeepStableValue
// Dependencies: [19, 1559]
// Exports: useDeepStableValue

// Module 1597 (useDeepStableValue)
import equalDefault from "equal" /* 1559 */;
import closure_2 from "noop" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
