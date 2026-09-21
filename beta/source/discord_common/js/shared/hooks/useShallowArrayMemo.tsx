// Module ID: 16462
// Function ID: 16463
// Name: useShallowArrayMemo
// Dependencies: [558, 568, 16463, 560, 2]

// Module 16462 (useShallowArrayMemo)
import c from "c" /* 568 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16463 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const discord_common_shallowEqual = tmp(560);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      return closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return useMemoWithEqualityFunctionDefault(tmp4, arg0, discord_common_shallowEqual.areArraysShallowEqual);
}) : ((arg0) => {
  closure_0 = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, discord_common_shallowEqual.areArraysShallowEqual);
});
