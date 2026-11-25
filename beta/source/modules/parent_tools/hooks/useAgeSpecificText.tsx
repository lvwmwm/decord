// Module ID: 12466
// Function ID: 12467
// Name: useAgeSpecificText
// Dependencies: [9137, 2]
// Exports: useAgeSpecificText

// Module 12466 (useAgeSpecificText)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 9137 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
}
