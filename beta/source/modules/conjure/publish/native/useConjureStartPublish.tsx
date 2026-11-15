// Module ID: 12296
// Function ID: 12297
// Name: useConjureStartPublish
// Dependencies: [12297, 12298, 2]
// Exports: default

// Module 12296 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12297 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12298 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
