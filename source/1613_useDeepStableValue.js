// Module ID: 1613
// Function ID: 1614
// Name: useDeepStableValue
// Dependencies: [19, 1575]
// Exports: useDeepStableValue

// Module 1613 (useDeepStableValue)
import noop from "noop";


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!importDefault(1575)(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
