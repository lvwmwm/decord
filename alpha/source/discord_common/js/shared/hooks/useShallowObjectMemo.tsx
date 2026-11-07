// Module ID: 9544
// Function ID: 9545
// Name: useShallowObjectMemo
// Dependencies: [9545, 558, 2]
// Exports: default

// Module 9544 (useShallowObjectMemo)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 9545 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowObjectMemo.tsx");

export default function useShallowObjectMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqualDefault);
};
