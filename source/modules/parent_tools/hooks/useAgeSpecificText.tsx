// Module ID: 11107
// Function ID: 11108
// Name: useAgeSpecificText
// Dependencies: [7622, 2]
// Exports: useAgeSpecificText

// Module 11107 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7622)()) {
    tmp = intl2;
  }
  return tmp;
};
