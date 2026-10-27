// Module ID: 12152
// Function ID: 12153
// Name: useConjureStartPublish
// Dependencies: [558, 12153, 12154, 2]
// Exports: default

// Module 12152 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12153 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
