// Module ID: 1594
// Function ID: 1595
// Name: react
// Dependencies: [19, 1527]
// Exports: useNavigationContainerRef

// Module 1594 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1527 */;
import react from "react" /* 19 */;


export function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
}
