// Module ID: 11377
// Function ID: 11378
// Name: useAgeSpecificText
// Dependencies: [7382, 2]
// Exports: useAgeSpecificText

// Module 11377 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7382)()) {
    tmp = intl2;
  }
  return tmp;
};
