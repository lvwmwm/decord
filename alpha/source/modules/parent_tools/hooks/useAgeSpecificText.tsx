// Module ID: 12559
// Function ID: 12560
// Name: useAgeSpecificText
// Dependencies: [558, 7956, 2]
// Exports: useAgeSpecificText

// Module 12559 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7956 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(cResult, cResult2) {
  let tmp = cResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = cResult2;
  }
  return tmp;
};
