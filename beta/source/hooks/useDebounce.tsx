// Module ID: 12981
// Function ID: 12982
// Name: useDebounce
// Dependencies: [32, 19, 2]
// Exports: default

// Module 12981 (useDebounce)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  let closure_2;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [first, closure_2] = react.useState(arg0);
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, closure_1);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return first;
};
