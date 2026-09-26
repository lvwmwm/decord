// Module ID: 1599
// Function ID: 1600
// Dependencies: [19, 1561]
// Exports: useDeepStableValue

// Module 1599
import equalDefault from "equal" /* 1561 */;
import noop from "module_19" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
