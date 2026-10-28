// Module ID: 12190
// Function ID: 12191
// Name: useConjureStartPublish
// Dependencies: [558, 12191, 12192, 2]
// Exports: default

// Module 12190 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12191 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12192 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
