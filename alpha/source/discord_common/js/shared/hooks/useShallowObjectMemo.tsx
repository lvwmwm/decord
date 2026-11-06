// Module ID: 9562
// Function ID: 9563
// Name: useShallowObjectMemo
// Dependencies: [9563, 558, 2]
// Exports: default

// Module 9562 (useShallowObjectMemo)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 9563 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowObjectMemo.tsx");

export default function useShallowObjectMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqualDefault);
};
