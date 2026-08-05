// Module ID: 11211
// Function ID: 11212
// Name: useAgeSpecificText
// Dependencies: [7232, 2]
// Exports: useAgeSpecificText

// Module 11211 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(7232)()) {
    tmp = intl2;
  }
  return tmp;
};
