// Module ID: 8934
// Function ID: 8935
// Name: useLeadingEdgeDebounce
// Dependencies: [32, 19, 2]
// Exports: useLeadingEdgeDebounce

// Module 8934 (useLeadingEdgeDebounce)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = (arg0, arg1) => {
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = react.useRef(true);
  [first, closure_3] = react.useState(arg0);
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_3(closure_0);
      ref.current = true;
    }, closure_1);
    const tmp = ref;
    if (ref.current) {
      closure_3(timeout);
    }
    tmp.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return first;
};
