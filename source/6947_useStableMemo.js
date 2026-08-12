// Module ID: 6947
// Function ID: 6948
// Name: useStableMemo
// Dependencies: [19, 6948]
// Exports: default

// Module 6947 (useStableMemo)
import { useRef } from "noop";

let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!importDefault(6948)(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};
