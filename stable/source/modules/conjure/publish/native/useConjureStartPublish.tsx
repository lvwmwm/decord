// Module ID: 12102
// Function ID: 12103
// Name: useConjureStartPublish
// Dependencies: [12103, 12104, 2]
// Exports: default

// Module 12102 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12103 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12104 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
