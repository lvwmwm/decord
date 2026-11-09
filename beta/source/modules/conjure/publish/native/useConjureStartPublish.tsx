// Module ID: 12265
// Function ID: 12266
// Name: useConjureStartPublish
// Dependencies: [12266, 12267, 2]
// Exports: default

// Module 12265 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12266 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12267 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
