// Module ID: 16537
// Function ID: 16538
// Name: useShallowArrayMemo
// Dependencies: [558, 576, 16538, 568, 2]

// Module 16537 (useShallowArrayMemo)
import react from "react" /* 576 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16538 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const shallowEqual = tmp(568);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShallowArrayMemo(arg0) {
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
}) : (function useShallowArrayMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqual.areArraysShallowEqual);
});
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default tmp2;
