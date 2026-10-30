// Module ID: 1591
// Function ID: 1592
// Name: react
// Dependencies: [19, 1524]
// Exports: useNavigationContainerRef

// Module 1591 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1524 */;
import react from "react" /* 19 */;


export function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
}
