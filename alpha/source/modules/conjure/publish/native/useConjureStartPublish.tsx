// Module ID: 12274
// Function ID: 12275
// Name: useConjureStartPublish
// Dependencies: [12275, 12276, 2]
// Exports: default

// Module 12274 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12275 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12276 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
