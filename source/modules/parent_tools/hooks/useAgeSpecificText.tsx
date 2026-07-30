// Module ID: 11109
// Function ID: 11110
// Name: useAgeSpecificText
// Dependencies: [6253, 2]
// Exports: useAgeSpecificText

// Module 11109 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(6253)()) {
    tmp = intl2;
  }
  return tmp;
};
