// Module ID: 13173
// Function ID: 13174
// Name: useConjureStartPublish
// Dependencies: [13174, 13175, 2]
// Exports: default

// Module 13173 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13174 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 13175 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
