// Module ID: 11127
// Function ID: 11128
// Name: useAgeSpecificText
// Dependencies: [6259, 2]
// Exports: useAgeSpecificText

// Module 11127 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(6259)()) {
    tmp = intl2;
  }
  return tmp;
};
