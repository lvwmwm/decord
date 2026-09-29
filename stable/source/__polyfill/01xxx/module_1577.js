// Module ID: 1577
// Function ID: 1578
// Dependencies: [19, 1510]
// Exports: useNavigationContainerRef

// Module 1577
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1510 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = noop.useRef(null);
  if (null == ref.current) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
};
