// Module ID: 13171
// Function ID: 13172
// Name: useConjureStartPublish
// Dependencies: [13172, 13173, 2]
// Exports: default

// Module 13171 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13172 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 13173 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
