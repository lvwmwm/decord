// Module ID: 1573
// Function ID: 1574
// Name: useNavigationContainerRef
// Dependencies: [19, 1506]
// Exports: useNavigationContainerRef

// Module 1573 (useNavigationContainerRef)
import noop from "noop";

const require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = require(1506) /* createNavigationContainerRef */.createNavigationContainerRef();
    const obj = require(1506) /* createNavigationContainerRef */;
  }
  return ref.current;
};
