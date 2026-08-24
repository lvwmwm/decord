// Module ID: 15452
// Function ID: 15453
// Name: useShallowArrayMemo
// Dependencies: [15453, 643, 2]
// Exports: default

// Module 15452 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 15453 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(643).areArraysShallowEqual);
};
