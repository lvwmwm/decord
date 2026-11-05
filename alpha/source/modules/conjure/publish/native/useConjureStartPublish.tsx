// Module ID: 12307
// Function ID: 12308
// Name: useConjureStartPublish
// Dependencies: [12308, 12309, 2]
// Exports: default

// Module 12307 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12308 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12309 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
