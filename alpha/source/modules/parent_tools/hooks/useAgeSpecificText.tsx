// Module ID: 11487
// Function ID: 11488
// Name: useAgeSpecificText
// Dependencies: [558, 7721, 2]
// Exports: useAgeSpecificText

// Module 11487 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7721 */;
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
