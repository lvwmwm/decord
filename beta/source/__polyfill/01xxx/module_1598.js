// Module ID: 1598
// Function ID: 1599
// Dependencies: [19, 1560]
// Exports: useDeepStableValue

// Module 1598
import equalDefault from "equal" /* 1560 */;
import noop from "module_19" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
