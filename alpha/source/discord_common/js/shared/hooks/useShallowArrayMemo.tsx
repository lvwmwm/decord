// Module ID: 18722
// Function ID: 18723
// Name: useShallowArrayMemo
// Dependencies: [9355, 558, 2]
// Exports: default

// Module 18722 (useShallowArrayMemo)
import shallowEqual from "shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 9355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqual.areArraysShallowEqual);
};
