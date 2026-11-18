// Module ID: 8844
// Function ID: 8845
// Name: useShallowObjectMemo
// Dependencies: [8845, 558, 2]
// Exports: default

// Module 8844 (useShallowObjectMemo)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 8845 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowObjectMemo.tsx");

export default function useShallowObjectMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqualDefault);
};
