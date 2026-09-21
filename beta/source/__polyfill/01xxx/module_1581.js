// Module ID: 1581
// Function ID: 1582
// Dependencies: [19, 1514]
// Exports: useNavigationContainerRef

// Module 1581
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1514 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = noop.useRef(null);
  if (null == ref.current) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
};
