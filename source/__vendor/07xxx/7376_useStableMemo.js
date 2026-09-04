// Module ID: 7376
// Function ID: 7377
// Name: useStableMemo
// Dependencies: [19, 7377]
// Exports: default

// Module 7376 (useStableMemo)
import noop from "noop" /* 19 */;
import areHookInputsEqualDefault from "areHookInputsEqual" /* 7377 */;

const useRef = noop.useRef;
let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!areHookInputsEqualDefault(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};
