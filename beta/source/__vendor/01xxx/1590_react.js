// Module ID: 1590
// Function ID: 1591
// Name: react
// Dependencies: [19, 1523]
// Exports: useNavigationContainerRef

// Module 1590 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1523 */;
import react from "react" /* 19 */;


export function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
}
