// Module ID: 1613
// Function ID: 1614
// Name: useDeepStableValue
// Dependencies: [19, 1575]
// Exports: useDeepStableValue

// Module 1613 (useDeepStableValue)
import equalDefault from "equal" /* 1575 */;
import closure_2 from "noop" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = React.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
