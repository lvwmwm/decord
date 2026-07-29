// Module ID: 11113
// Function ID: 11114
// Name: useAgeSpecificText
// Dependencies: [6256, 2]
// Exports: useAgeSpecificText

// Module 11113 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(6256)()) {
    tmp = intl2;
  }
  return tmp;
};
