// Module ID: 10417
// Function ID: 10418
// Name: useTimeout
// Dependencies: [19, 558, 576, 2]

// Module 10417 (useTimeout)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTimeout(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp7;
  let tmp8;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = react2;
  const cResult = obj.c(6);
  const tmp2 = _false(arg0);
  let c2 = tmp2;
  if (cResult[0] !== arg0) {
    const fn = function c() {
      closure_2.current = current;
    };
    const items = [arg0];
    let num = 0;
    cResult[0] = arg0;
    let num2 = 1;
    cResult[1] = fn;
    let num3 = 2;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  let tmp5 = React2;
  let tmp6 = React2(tmp3, tmp4);
  if (cResult[3] !== arg1) {
    const fn2 = function l() {
      let closure_0;
      let ref;
      if (null !== closure_1) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => ref.current(), tmp);
        return () => clearTimeout(closure_0);
      }
    };
    const items1 = [arg1, tmp2];
    let num4 = 3;
    cResult[3] = arg1;
    let num5 = 4;
    cResult[4] = fn2;
    let num6 = 5;
    cResult[5] = items1;
    tmp8 = items1;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  tmp5(tmp7, tmp8);
}) : (function useTimeout(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = _false(arg0);
  let c2 = tmp;
  const items = [arg0];
  React2(() => {
    closure_2.current = current;
  }, items);
  const items1 = [arg1, tmp];
  const tmp3 = React2(() => {
    let closure_0;
    let ref;
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), tmp);
      return () => clearTimeout(closure_0);
    }
  }, items1);
});
let result = size.fileFinishedImporting("hooks/useTimeout.tsx");

export default tmp3;
