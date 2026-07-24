// Module ID: 11091
// Function ID: 86324
// Name: useAgeSpecificText
// Dependencies: [7123, 2]
// Exports: useAgeSpecificText

// Module 11091 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7123)()) {
    tmp = intl2;
  }
  return tmp;
};
