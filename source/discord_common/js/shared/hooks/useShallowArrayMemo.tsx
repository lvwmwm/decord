// Module ID: 16048
// Function ID: 16049
// Name: useShallowArrayMemo
// Dependencies: [16049, 640, 2]
// Exports: default

// Module 16048 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16049 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(640).areArraysShallowEqual);
};
