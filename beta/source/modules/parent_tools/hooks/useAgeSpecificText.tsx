// Module ID: 11531
// Function ID: 11532
// Name: useAgeSpecificText
// Dependencies: [558, 8296, 2]
// Exports: useAgeSpecificText

// Module 11531 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8296 */;
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
