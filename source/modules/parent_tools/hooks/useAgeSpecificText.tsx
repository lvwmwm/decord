// Module ID: 11430
// Function ID: 11431
// Name: useAgeSpecificText
// Dependencies: [8714, 2]
// Exports: useAgeSpecificText

// Module 11430 (useAgeSpecificText)
import set from "set" /* 2 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8714 */;

const result = set.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};
