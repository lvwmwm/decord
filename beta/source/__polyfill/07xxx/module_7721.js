// Module ID: 7721
// Function ID: 7722
// Dependencies: [19, 7722]
// Exports: default

// Module 7721
import _mod19 from "module_19" /* 19 */;
import _modDef7722 from "module_7722" /* 7722 */;

const useRef = _mod19.useRef;
let closure_3 = [];

export default function useStableMemo(S, cResult) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = S();
    tmp2.current = cResult;
  } else if (!_modDef7722(cResult, tmp2.current)) {
    tmp.current = S();
    tmp2.current = cResult;
  }
  return tmp.current;
};
