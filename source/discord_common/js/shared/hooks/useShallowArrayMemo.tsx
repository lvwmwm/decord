// Module ID: 16126
// Function ID: 16127
// Name: useShallowArrayMemo
// Dependencies: [16127, 558, 2]
// Exports: default

// Module 16126 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16127 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(558).areArraysShallowEqual);
};
