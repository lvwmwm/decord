// Module ID: 7158
// Function ID: 7159
// Name: useStableMemo
// Dependencies: [19, 7159]
// Exports: default

// Module 7158 (useStableMemo)
import react from "react" /* 19 */;
import areHookInputsEqualDefault from "areHookInputsEqual" /* 7159 */;

const useRef = react.useRef;
let closure_3 = [];

export default function useStableMemo(cResult, cResult2) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  } else if (!areHookInputsEqualDefault(cResult2, tmp2.current)) {
    tmp.current = cResult();
    tmp2.current = cResult2;
  }
  return tmp.current;
};
