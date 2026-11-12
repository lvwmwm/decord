// Module ID: 13072
// Function ID: 13073
// Name: useConjureStartPublish
// Dependencies: [13073, 13074, 2]
// Exports: default

// Module 13072 (useConjureStartPublish)
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13073 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 13074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  const tmp = useConjureStartPublishDefault;
  return tmp(arg0, arg1, arg2, ConjurePublishSheetDefault);
};
