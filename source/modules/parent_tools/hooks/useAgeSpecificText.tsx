// Module ID: 11089
// Function ID: 86085
// Name: useAgeSpecificText
// Dependencies: [6236, 2]
// Exports: useAgeSpecificText

// Module 11089 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(6236)()) {
    tmp = intl2;
  }
  return tmp;
};
