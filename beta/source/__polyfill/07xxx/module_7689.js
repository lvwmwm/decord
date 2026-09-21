// Module ID: 7689
// Function ID: 7690
// Dependencies: [19, 7690]
// Exports: default

// Module 7689
import _mod19 from "module_19" /* 19 */;
import _modDef7690 from "module_7690" /* 7690 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(S, cResult) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = S();
    tmp2.current = cResult;
  } else if (!_modDef7690(cResult, tmp2.current)) {
    tmp.current = S();
    tmp2.current = cResult;
  }
  return tmp.current;
};
