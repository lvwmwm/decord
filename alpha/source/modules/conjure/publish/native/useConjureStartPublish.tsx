// Module ID: 12443
// Function ID: 12444
// Name: useConjureStartPublish
// Dependencies: [12444, 12445, 2]
// Exports: default

// Module 12443 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12444 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12445 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
