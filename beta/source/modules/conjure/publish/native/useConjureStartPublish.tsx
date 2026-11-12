// Module ID: 12297
// Function ID: 12298
// Name: useConjureStartPublish
// Dependencies: [12298, 12299, 2]
// Exports: default

// Module 12297 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12298 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
