// Module ID: 11050
// Function ID: 85957
// Name: useAgeSpecificText
// Dependencies: [6201, 2]
// Exports: useAgeSpecificText

// Module 11050 (useAgeSpecificText)
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (importDefault(6201)()) {
    tmp = intl2;
  }
  return tmp;
};
