// Module ID: 12050
// Function ID: 12051
// Name: useAgeSpecificText
// Dependencies: [558, 8922, 2]
// Exports: useAgeSpecificText

// Module 12050 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8922 */;
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
