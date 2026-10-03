// Module ID: 16045
// Function ID: 16046
// Name: useShallowArrayMemo
// Dependencies: [558, 576, 16046, 568, 2]

// Module 16045 (useShallowArrayMemo)
import react from "react" /* 576 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16046 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const shallowEqual = tmp(568);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      return closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = useMemoWithEqualityFunctionDefault;
  return tmp5(tmp4, arg0, shallowEqual.areArraysShallowEqual);
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqual.areArraysShallowEqual);
});
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default tmp2;
