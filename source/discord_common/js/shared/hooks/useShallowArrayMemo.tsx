// Module ID: 15962
// Function ID: 15963
// Name: useShallowArrayMemo
// Dependencies: [15963, 640, 2]
// Exports: default

// Module 15962 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 15963 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(640).areArraysShallowEqual);
};
