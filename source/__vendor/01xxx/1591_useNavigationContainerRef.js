// Module ID: 1591
// Function ID: 1592
// Name: useNavigationContainerRef
// Dependencies: [19, 1524]
// Exports: useNavigationContainerRef

// Module 1591 (useNavigationContainerRef)
import createNavigationContainerRef from "createNavigationContainerRef" /* 1524 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (null == ref.current) {
    ref.current = createNavigationContainerRef.createNavigationContainerRef();
    const obj = createNavigationContainerRef;
  }
  return ref.current;
};
