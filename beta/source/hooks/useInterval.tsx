// Module ID: 6865
// Function ID: 6866
// Name: useInterval
// Dependencies: [19, 38, 2]
// Exports: default

// Module 6865 (useInterval)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
const result = size.fileFinishedImporting("hooks/useInterval.tsx");

export default function useInterval(current, arg1) {
  let ref;
  let closure_1 = arg1;
  let closure_2 = ref(current);
  ref = ref(null);
  const items = [current];
  const tmp = closure_2(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1];
  closure_2(() => {
    let ref2;
    if (null !== closure_1) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        current(closure_1[1])(null != ref.current, "Missing callback");
        ref.current();
      }, tmp);
      return () => clearInterval(ref2.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items1);
};
