// Module ID: 1578
// Function ID: 1579
// Dependencies: [19, 1511]
// Exports: useNavigationContainerRef

// Module 1578
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1511 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = noop.useRef(null);
  if (null == ref.current) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
};
