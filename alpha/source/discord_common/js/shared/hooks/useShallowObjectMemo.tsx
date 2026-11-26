// Module ID: 11215
// Function ID: 11216
// Name: useShallowObjectMemo
// Dependencies: [11216, 558, 2]
// Exports: default

// Module 11215 (useShallowObjectMemo)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 11216 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowObjectMemo.tsx");

export default function useShallowObjectMemo(arg0) {
  let closure_0 = arg0;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, arg0, shallowEqualDefault);
};
