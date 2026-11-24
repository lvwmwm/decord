// Module ID: 1593
// Function ID: 1594
// Name: react
// Dependencies: [19, 1526]
// Exports: useNavigationContainerRef

// Module 1593 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1526 */;
import react from "react" /* 19 */;


export function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
}
