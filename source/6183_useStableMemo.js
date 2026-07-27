// Module ID: 6183
// Function ID: 55518
// Name: useStableMemo
// Dependencies: [31, 6184]
// Exports: default

// Module 6183 (useStableMemo)
import { useRef } from "result";

let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!importDefault(6184)(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};
