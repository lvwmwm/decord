// Module ID: 11273
// Function ID: 11274
// Name: useAgeSpecificText
// Dependencies: [558, 8103, 2]
// Exports: useAgeSpecificText

// Module 11273 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8103 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = (arg0, arg1) => {
  let tmp = arg0;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = arg1;
  }
  return tmp;
};
