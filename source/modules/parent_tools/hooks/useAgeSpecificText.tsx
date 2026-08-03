// Module ID: 11240
// Function ID: 11241
// Name: useAgeSpecificText
// Dependencies: [7248, 2]
// Exports: useAgeSpecificText

// Module 11240 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7248)()) {
    tmp = intl2;
  }
  return tmp;
};
