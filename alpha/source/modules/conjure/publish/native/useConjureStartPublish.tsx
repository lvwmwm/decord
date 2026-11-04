// Module ID: 12299
// Function ID: 12300
// Name: useConjureStartPublish
// Dependencies: [12300, 12301, 2]
// Exports: default

// Module 12299 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12300 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12301 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
