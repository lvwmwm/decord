// Module ID: 12405
// Function ID: 12406
// Name: useConjureStartPublish
// Dependencies: [12406, 12407, 2]
// Exports: default

// Module 12405 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12406 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12407 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
