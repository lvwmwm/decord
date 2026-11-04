// Module ID: 12300
// Function ID: 12301
// Name: useConjureStartPublish
// Dependencies: [12301, 12302, 2]
// Exports: default

// Module 12300 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12301 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12302 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
