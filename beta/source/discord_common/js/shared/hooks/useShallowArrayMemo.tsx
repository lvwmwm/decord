// Module ID: 17660
// Function ID: 17661
// Name: useShallowArrayMemo
// Dependencies: [8938, 558, 2]
// Exports: default

// Module 17660 (useShallowArrayMemo)
import shallowEqual from "shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 8938 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqual.areArraysShallowEqual);
};
