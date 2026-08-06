// Module ID: 1594
// Function ID: 1595
// Name: useDeepStableValue
// Dependencies: [19, 1556]
// Exports: useDeepStableValue

// Module 1594 (useDeepStableValue)
import noop from "noop";


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!importDefault(1556)(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
