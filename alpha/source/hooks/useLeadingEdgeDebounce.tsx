// Module ID: 9185
// Function ID: 9186
// Name: useLeadingEdgeDebounce
// Dependencies: [32, 19, 558, 576, 2]

// Module 9185 (useLeadingEdgeDebounce)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_3;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(4);
  let closure_2 = react.useRef(true);
  [, closure_3] = react.useState(arg0);
  const obj2 = react;
  if (cResult[0] === arg1) {
    let tmp4;
    let tmp5;
    if (cResult[1] === arg0) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const effect = obj2.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function s() {
    const timeout = setTimeout(() => {
      closure_1_3(closure_0);
      ref.current = true;
    }, closure_1);
    const tmp = ref;
    if (ref.current) {
      closure_3(timeout);
    }
    tmp.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = react.useRef(true);
  [first, closure_3] = react.useState(arg0);
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_3(closure_0);
      ref.current = true;
    }, closure_1);
    const tmp = ref;
    if (ref.current) {
      closure_3(timeout);
    }
    tmp.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return first;
});
const result = size.fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = tmp2;
