// Module ID: 11488
// Function ID: 11489
// Name: useAgeSpecificText
// Dependencies: [7481, 2]
// Exports: useAgeSpecificText

// Module 11488 (useAgeSpecificText)
import set from "set" /* 2 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7481 */;

const result = set.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};
