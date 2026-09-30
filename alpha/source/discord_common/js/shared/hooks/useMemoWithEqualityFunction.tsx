// Module ID: 15959
// Function ID: 15960
// Name: useMemoWithEqualityFunction
// Dependencies: [19, 15960, 2]
// Exports: default

// Module 15959 (useMemoWithEqualityFunction)
import _mod19 from "module_19" /* 19 */;
import useInitRefDefault from "useInitRef" /* 15960 */;
import size from "module_2" /* 2 */;

const useRef = _mod19.useRef;
let closure_3 = Symbol();
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMemoWithEqualityFunction.tsx");

export default function useMemoWithEqualityFunction(fn, current, fn2) {
  const tmp = useInitRefDefault(fn);
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp2.current = current;
  } else if (!fn2(tmp2.current, current)) {
    tmp.current = fn();
    tmp2.current = current;
  }
  return tmp.current;
};
