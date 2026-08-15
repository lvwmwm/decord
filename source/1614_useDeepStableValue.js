// Module ID: 1614
// Function ID: 1615
// Name: useDeepStableValue
// Dependencies: [19, 1576]
// Exports: useDeepStableValue

// Module 1614 (useDeepStableValue)
import noop from "noop";


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!importDefault(1576)(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
