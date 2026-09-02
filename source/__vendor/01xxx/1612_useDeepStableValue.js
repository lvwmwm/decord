// Module ID: 1612
// Function ID: 1613
// Name: useDeepStableValue
// Dependencies: [19, 1574]
// Exports: useDeepStableValue

// Module 1612 (useDeepStableValue)
import equalDefault from "equal" /* 1574 */;
import closure_2 from "noop" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
