// Module ID: 1602
// Function ID: 1603
// Dependencies: [19, 1564]
// Exports: useDeepStableValue

// Module 1602
import equalDefault from "equal" /* 1564 */;
import noop from "module_19" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
