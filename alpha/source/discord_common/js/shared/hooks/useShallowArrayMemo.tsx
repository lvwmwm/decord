// Module ID: 16476
// Function ID: 16477
// Name: useShallowArrayMemo
// Dependencies: [16477, 558, 2]
// Exports: default

// Module 16476 (useShallowArrayMemo)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16477 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  closure_0 = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, discord_common_shallowEqual.areArraysShallowEqual);
};
