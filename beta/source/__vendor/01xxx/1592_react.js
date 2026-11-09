// Module ID: 1592
// Function ID: 1593
// Name: react
// Dependencies: [19, 1525]
// Exports: useNavigationContainerRef

// Module 1592 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1525 */;
import react from "react" /* 19 */;


export function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
}
