// Module ID: 1593
// Function ID: 1594
// Name: useNavigationContainerRef
// Dependencies: [19, 1526]
// Exports: useNavigationContainerRef

// Module 1593 (useNavigationContainerRef)
import createNavigationContainerRef from "createNavigationContainerRef" /* 1526 */;
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
