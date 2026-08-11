// Module ID: 15268
// Function ID: 15269
// Name: useMemoWithEqualityFunction
// Dependencies: [19, 15269, 2]
// Exports: default

// Module 15268 (useMemoWithEqualityFunction)
import { useRef } from "noop";

let closure_3 = Symbol();
const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useMemoWithEqualityFunction.tsx");

export default function useMemoWithEqualityFunction(arg0, current) {
  const tmp = importDefault(15269)(arg0);
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp2.current = current;
  } else if (!arg2(tmp2.current, current)) {
    tmp.current = arg0();
    tmp2.current = current;
  }
  return tmp.current;
};
