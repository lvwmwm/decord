// Module ID: 16552
// Function ID: 16553
// Name: useShallowArrayMemo
// Dependencies: [16553, 558, 2]
// Exports: default

// Module 16552 (useShallowArrayMemo)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  closure_0 = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, discord_common_shallowEqual.areArraysShallowEqual);
};
