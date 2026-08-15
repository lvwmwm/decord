// Module ID: 1593
// Function ID: 1594
// Name: useNavigationContainerRef
// Dependencies: [19, 1526]
// Exports: useNavigationContainerRef

// Module 1593 (useNavigationContainerRef)
import noop from "noop";

const require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = require(1526) /* createNavigationContainerRef */.createNavigationContainerRef();
    const obj = require(1526) /* createNavigationContainerRef */;
  }
  return ref.current;
};
