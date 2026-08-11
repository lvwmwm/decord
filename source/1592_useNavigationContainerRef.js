// Module ID: 1592
// Function ID: 1593
// Name: useNavigationContainerRef
// Dependencies: [19, 1525]
// Exports: useNavigationContainerRef

// Module 1592 (useNavigationContainerRef)
import noop from "noop";

const require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = require(1525) /* createNavigationContainerRef */.createNavigationContainerRef();
    const obj = require(1525) /* createNavigationContainerRef */;
  }
  return ref.current;
};
