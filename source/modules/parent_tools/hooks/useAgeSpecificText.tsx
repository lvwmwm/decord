// Module ID: 11715
// Function ID: 11716
// Name: useAgeSpecificText
// Dependencies: [8788, 2]
// Exports: useAgeSpecificText

// Module 11715 (useAgeSpecificText)
import set from "set" /* 2 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8788 */;

const result = set.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};
