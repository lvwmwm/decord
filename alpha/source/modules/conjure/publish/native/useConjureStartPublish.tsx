// Module ID: 12238
// Function ID: 12239
// Name: useConjureStartPublish
// Dependencies: [12239, 12240, 2]
// Exports: default

// Module 12238 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12239 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12240 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
