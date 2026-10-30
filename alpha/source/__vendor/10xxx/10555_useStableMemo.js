// Module ID: 10555
// Function ID: 10556
// Name: useStableMemo
// Dependencies: [19, 10556]
// Exports: default

// Module 10555 (useStableMemo)
import react from "react" /* 19 */;
import areHookInputsEqualDefault from "areHookInputsEqual" /* 10556 */;

const useRef = react.useRef;
let closure_3 = [];

export default function useStableMemo(fn, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = fn();
    tmp2.current = items;
  } else if (!areHookInputsEqualDefault(items, tmp2.current)) {
    tmp.current = fn();
    tmp2.current = items;
  }
  return tmp.current;
};
