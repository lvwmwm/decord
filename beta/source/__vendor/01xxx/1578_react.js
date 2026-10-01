// Module ID: 1578
// Function ID: 1579
// Name: react
// Dependencies: [19, 1511]
// Exports: useNavigationContainerRef

// Module 1578 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1511 */;
import react from "react" /* 19 */;


export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
};
