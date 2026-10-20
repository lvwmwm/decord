// Module ID: 1596
// Function ID: 1597
// Name: react
// Dependencies: [19, 1529]
// Exports: useNavigationContainerRef

// Module 1596 (react)
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1529 */;
import react from "react" /* 19 */;


export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = react.useRef(null);
  if (null == ref.current) {
    const obj = NOT_INITIALIZED_ERROR;
    ref.current = obj.createNavigationContainerRef();
  }
  return ref.current;
};
