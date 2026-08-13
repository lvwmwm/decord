// Module ID: 11378
// Function ID: 11379
// Name: useAgeSpecificText
// Dependencies: [7382, 2]
// Exports: useAgeSpecificText

// Module 11378 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7382)()) {
    tmp = intl2;
  }
  return tmp;
};
