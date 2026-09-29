// Module ID: 7716
// Function ID: 7717
// Dependencies: [19, 7717]
// Exports: default

// Module 7716
import _mod19 from "module_19" /* 19 */;
import _modDef7717 from "module_7717" /* 7717 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(fn, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = fn();
    tmp2.current = items;
  } else if (!_modDef7717(items, tmp2.current)) {
    tmp.current = fn();
    tmp2.current = items;
  }
  return tmp.current;
};
