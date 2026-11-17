// Module ID: 9432
// Function ID: 9433
// Name: useMemoWithEqualityFunction
// Dependencies: [19, 9433, 2]
// Exports: default

// Module 9432 (useMemoWithEqualityFunction)
import react from "react" /* 19 */;
import reactDefault from "react" /* 9433 */;
import size from "module_2" /* 2 */;

const useRef = react.useRef;
let closure_3 = Symbol();
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMemoWithEqualityFunction.tsx");

export default function useMemoWithEqualityFunction(fn, current, fn2) {
  const tmp = reactDefault(fn);
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp2.current = current;
  } else if (!fn2(tmp2.current, current)) {
    tmp.current = fn();
    tmp2.current = current;
  }
  return tmp.current;
};
