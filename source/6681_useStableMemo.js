// Module ID: 6681
// Function ID: 51454
// Name: useStableMemo
// Dependencies: [31, 6682]
// Exports: default

// Module 6681 (useStableMemo)
import { useRef } from "result";

let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!importDefault(6682)(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};
