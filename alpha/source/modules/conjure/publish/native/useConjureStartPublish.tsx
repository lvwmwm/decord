// Module ID: 13078
// Function ID: 13079
// Name: useConjureStartPublish
// Dependencies: [13079, 13080, 2]
// Exports: default

// Module 13078 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13079 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 13080 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
