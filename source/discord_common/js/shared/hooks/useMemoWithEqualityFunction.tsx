// Module ID: 16049
// Function ID: 16050
// Name: useMemoWithEqualityFunction
// Dependencies: [19, 16050, 2]
// Exports: default

// Module 16049 (useMemoWithEqualityFunction)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import useInitRefDefault from "useInitRef" /* 16050 */;

const useRef = noop.useRef;
let closure_3 = Symbol();
const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useMemoWithEqualityFunction.tsx");

export default function useMemoWithEqualityFunction(arg0, current) {
  const tmp = useInitRefDefault(arg0);
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp2.current = current;
  } else if (!arg2(tmp2.current, current)) {
    tmp.current = arg0();
    tmp2.current = current;
  }
  return tmp.current;
};
