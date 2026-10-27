// Module ID: 1598
// Function ID: 1599
// Name: react
// Dependencies: [19, 1531]
// Exports: useNavigationContainerRef

// Module 1598 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1531 */;
import react from "react" /* 19 */;


export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
};
