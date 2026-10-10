// Module ID: 7164
// Function ID: 7165
// Name: useStableMemo
// Dependencies: [19, 7165]
// Exports: default

// Module 7164 (useStableMemo)
import react from "react" /* 19 */;
import areHookInputsEqualDefault from "areHookInputsEqual" /* 7165 */;

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
