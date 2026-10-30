// Module ID: 13312
// Function ID: 13313
// Name: useAgeSpecificText
// Dependencies: [8362, 2]
// Exports: useAgeSpecificText

// Module 13312 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
}
